const express = require('express');
const app = express();
const badgeController = require('./controllers/badgeController');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');



app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use('/badges', badgeController);


app.listen(3000, ()=>{
    console.log('Server running');
})


module.exports = app;