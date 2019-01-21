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
        res.send(data);
    })
})


module.exports = router;