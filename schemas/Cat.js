const mongoose = require('mongoose')

// Cat Schema
let CatSchema = new mongoose.Schema({
    id: Number,
    name: String,
    weight: Number,
    img: String,
    date: Object
})

module.exports = mongoose.model('Cat', CatSchema)