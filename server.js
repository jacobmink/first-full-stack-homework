const express = require('express');
const app = express();

const Badges = require('../models/badges_db');




app.listen(3000, ()=>{
    console.log('Server running');
})


module.exports = app;