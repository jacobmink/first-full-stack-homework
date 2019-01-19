const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/badges_db';

mongoose.connect(connectionString);

const Schema = mongoose.Schema;

const badgeSchema = new Schema({
    title: {type: String, required: true},
    badgeType: {type: String, required: true},
    colors: [{type: String, required: true}],
    difficulty: {type: Number, required: true},
    

});


const Badges = mongoose.model('Badges', badgeSchema);

module.exports = Badges;


