const getFatCat = require('./actions/getFatCat')
const storeCatInMongo = require('./actions/storeCatInMongo')
const uploadToCloudinary = require('./actions/uploadToCloudinary')
const mongoose = require('mongoose')
const Cat = require('../schemas/Cat')
const dayjs = require('dayjs')

// TODO: I had to separate out this function due to its async nature. Unsure if there is another cleaner way to do this.
async function storeCat(cat){
    let fattestCat = await getFatCat();
    console.log('FATCAT Worker: Getting new fat cat.')

    if(cat !== undefined){
        // If the previous fat cat has a different id, upload the new cats image to cloudinary, otherwise we'll just use the old image
        fattestCat.img = fattestCat.id === cat.id ? fattestCat.img = cat.img : await uploadToCloudinary(fattestCat.img)
    } else {
        // This code is in case no cat exists in the database. We'll just upload the image to cloudinary, considering there ARE no cats.
        fattestCat.img = await uploadToCloudinary(fattestCat.img)
    }

    // Now we store todays fat cat into the database
    storeCatInMongo(fattestCat, process.env.MONGODB_URI) 
    .then(()=>{
        console.log('FATCAT Worker: New cat saved in database.')
        // process.exit(1)
    })
}

async function getAndStoreFatCat(){
    try {
        let database = process.env.MONGODB_URI || 'mongodb://localhost/fatcats'

        mongoose.connect(database, {useNewUrlParser: true});

        let db = mongoose.connection;

        db.on('error', console.error.bind(console, 'connection error:'));

        await db.once('open', function(){
            Cat.findOne().sort({ date: -1 }).limit(1).exec((err, cat)=>{
                
                if(cat === null){
                    storeCat()
                    return
                }
                
                let storedCatDate = dayjs(cat.date)
                let today = dayjs()

                if(today.isBefore(storedCatDate, 'day')){
                    // This should never occur. We should never save cats to the FUTURE
                    throw new Error('Latest cat stored is from the future.')
                } else if(storedCatDate.isBefore(today, 'day')){
                    // This code will run if we haven't stored a cat in the DB today. 
                    storeCat(cat);
                } else { 
                    // This should occur when we restart the server and the like. We don't even need to use the old cat for anything.
                    console.log('FATCAT Worker: No cat retrieved. Today\'s cat is already saved.')
                }
            })
        })
    } catch(err){
        console.log(err)
    }
    
}

module.exports = getAndStoreFatCat;

