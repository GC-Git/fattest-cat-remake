const mongoose = require('mongoose')

// Cat Schema
let FatCatSchema = new mongoose.Schema({
    id: Number,
    name: String,
    weight: Number,
    img: String,
    date: Object
})

const FatCat = mongoose.model('FatCat', FatCatSchema)

module.exports = FatCat