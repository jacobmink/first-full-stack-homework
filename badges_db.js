const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/badges_db';

const Badge = require('./models/badge_schema');
const badgeData = require('./badge_examples');

// open connection
mongoose.connect(connectionString);

// insert starter data
Badge.collection.insertMany(badgeData, (err,data)=>{
    console.log('added data');
    mongoose.connection.close();
})
