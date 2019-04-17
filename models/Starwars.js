const mongoose = require('mongoose');
const starwarsSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    homePlanet: String, 
    age: Number,
    jedi: {type: Boolean, required: true},
    favoriteWeapons: [String],
    species: String
})

const Starwars = mongoose.model('Starwars', starwarsSchema);
module.exports = Starwars;
