const express = require('express');
const app = express();

const Badges = require('./badges_db');
















app.listen(3000, ()=>{
    console.log('Server running');
})


module.exports = app;