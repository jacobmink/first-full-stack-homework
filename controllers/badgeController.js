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

router.route('/')
    // index
    .get((req,res)=>{
        Badge.find((err,data)=>{
            if(err){
                res.send(err);
            }
            res.render('index.ejs', {
                badges: data
            });
        });
    })
    // post
    .post((req,res)=>{
        Badge.collection.insert(req.body, (err,data)=>{
            if(err){
                res.send(err);
            }
            res.redirect('/badges');
        });
    });

// new
router.route('/new')
    .get((req,res)=>{
        Badge.find((err,data)=>{
            if(err){
                res.send(err);
            }
            res.render('new.ejs');
        });
    });

router.route('/:id')
    // show
    .get((req,res)=>{
        Badge.findById(req.params.id, (err,data)=>{
            if(err){
                res.send(err);
            }
            res.render('show.ejs', {
                badge: data
            });
        });
    })
    // update
    .put((req,res)=>{
        Badge.findByIdAndUpdate(req.params.id, req.body, (err,data)=>{
            if(err){
                res.send(err);
            }
            res.redirect(`/badges/${req.params.id}`);
        });
    })
    // delete
    .delete((req,res)=>{
        Badge.findByIdAndRemove(req.params.id, (err,data)=>{
            if(err){
                res.send(err);
            }
            res.redirect('/badges');
        });
    });

// edit
router.route('/:id/edit')
    .get((req,res)=>{
        Badge.findById(req.params.id, (err,data)=>{
            if(err){
                res.send(err);
            }
            res.render('edit.ejs', {
                badge: data
            });
        });
    });





module.exports = router;