exports.index = function(req, res){
    console.log('Serving react app.')
    res.sendFile(path.join(__dirname+'../client/build/index.html'));
}

exports.catsDate = require('./catsDate')
exports.fatCatToday = require('./fatCatToday')
exports.catsDateRange = require('./catsDateRange')
exports.catsThisWeek = require('./catsThisWeek')
exports.catsToday = require('./catsToday')
exports.fatCatDate = require('./fatCatDate')
exports.fatCatDateRange = require('./fatCatDateRange')
exports.fatCatToday = require('./fatCatToday')
exports.catId = require('./catId')