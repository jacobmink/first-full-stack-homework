const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Badge = require('../badges_db');

const badgeData = require('../badge_examples');

// insert starter data
// Badge.collection.insertMany(badgeData, (err,data)=>{
//     console.log('added data');
//     mongoose.connection.close();
// })


// ROUTES

router.get('/', (req,res)=>{
    Badge.find((err,data)=>{
        if(err){
            res.send(err);
        }
        res.render('index.ejs', {
            badges: data
        })
        // res.send(data);
    })
});

// new
router.get('/new', (req,res)=>{
    res.render('new.ejs');
});

// post
router.post('/', (req,res)=>{
    Badge.insert(req.body);
    res.redirect('/badges');
})

// show
router.get('/:id', (req,res)=>{
    Badge.find((err,data)=>{
        if(err){
            res.send(err);
        }
        res.render('show.ejs', {
            badge: data[req.params.id],
            index: req.params.id
        })
    })
});

// delete
router.delete('/:id', (req,res)=>{
    Badge.findByIdAndRemove(req.params.id, (err,data)=>{
        if(err){
            res.send(err);
        }
        res.redirect('/badges');
    });
    
});

module.exports = router;