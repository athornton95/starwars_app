require('./db/db');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app =express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const router = require('./controllers/starwars')

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(morgan('short'));
app.use('/starwars', router);






app.listen(3000, () => {
    console.log('app is listening on port 3000');
})
