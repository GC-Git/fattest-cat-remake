const osmosis = require('osmosis')

async function getFatCat(getAllCats=false){
    let cats = []
    let fattestCat;

    await osmosis
        .get('https://www.oregonhumane.org/adopt/?type=cats')
        .find('.result-item')
        .set({
            'id': '.id',
            'name': '.name',
            'weight': '.weight',
            'img': '.image > img @src'
        })
        .data(function (data) {
            data.weight = parseFloat(data.weight.slice(0, -4)) // gets rid of 'lbs' and changes data to a number
            data.id = parseInt(data.id)
            cats.push(data); // Push the cat into our array of cats
        })
        .error(console.error) // in case there is an error found.
        .done(function (data) {
            cats.sort((cat1, cat2) => {return cat1.weight - cat2.weight}) // ~~ MAGIC SORTING CODE ~~
            fattestCat = cats[cats.length-1];
        })
    
    return getAllCats ? cats : fattestCat
}

module.exports = getFatCat;