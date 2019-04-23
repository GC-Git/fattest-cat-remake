const mongoose = require('mongoose')

// Cat Schema
module.exports = new mongoose.Schema({
    name: String,
    weight: Number,
    img: String,
    date: Object
})