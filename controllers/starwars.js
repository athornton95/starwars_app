const express = require('express');
const router = express.Router();
const Starwars = require('../models/Starwars');

// router.post('/', (req, res) => {
// })


router.get('/', (req, res) => {
    // res.send('reached show route');
    Starwars.find({}, (err, foundAllCharacters) => {
        if(err){
            res.send(err);
            console.log(err);
        } else {
            res.render('index.ejs', {characters: foundAllCharacters});
        }
    })
});

router.post('/', (req, res) => {
    Starwars.create(req.body, (err, newCharacterCreated) =>{
        if(err){
            res.send(err);
            console.log(err);
        } else {
            console.log(newCharacterCreated);
            res.redirect('/starwars');
        }
    })
})

router.get('/new', (req, res) => {
    res.render('new.ejs')
});
















module.exports = router;