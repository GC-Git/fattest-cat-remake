const osmosis = require('osmosis')

//TODO: Check to see if new cat is the same as the previous cat, and if anything changed. We may want to just store it again, otherwise there may be a need to keep track of how many days in a row a cat was the fattest for logic purposes. 

// TODO: If the cat is the same cat as the previous day, DON'T download a new image and upload it to cloudinary. Use the SAME image link, even if you're putting in a new database entry due to weight change.


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