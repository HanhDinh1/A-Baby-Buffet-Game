const mongoose = require('mongoose');
const {Schema, model } = mongoose;

const phraseSchema = new Schema({
    engPhrase: String,
    selectedLang: String
});

module.exports = model('Phrase', phraseSchema);