const osmosis = require('osmosis')

async function getFatCat(cats){
    cats.sort((cat1, cat2) => {return cat1.weight - cat2.weight}) // ~~ MAGIC SORTING CODE ~~
    fattestCat = cats[cats.length-1];
    return fattestCat;
}

module.exports = getFatCat;