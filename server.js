require('./db/db');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app =express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(morgan('short'));





app.listen(3000, () => {
    console.log('app is listening on port 3000');
})
