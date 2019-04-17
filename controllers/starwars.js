const express = require('express');
const router = express.Router();
const Starwars = require('../models/Starwars');


// router.post('/', (req, res) => {
// })


router.get('/', (req, res) => {
    // res.send('reached show route');
    res.render('index.ejs');
})
















module.exports = router;