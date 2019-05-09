// THIS FILE IS MEANT TO BE RUN SEPARATELY VIA SCHEDULING
require('dotenv').config({path:'../.env'})
const mongoose = require('mongoose')
const dayjs = require('dayjs')

// Actions
const getFatCat = require('./actions/getFatCat')
const storeCatInMongo = require('./actions/storeCatInMongo')
const uploadToCloudinary = require('./actions/uploadToCloudinary')
const getCats = require('./actions/getCats')

// Models
let Cat = require('../models/Cat')
let FatCat = require('../models/FatCat')


async function getAndStoreFatCat(){
    try {
        let database = process.env.MONGODB_URI || 'mongodb://localhost/fatcats'

        mongoose.connect(database, {useNewUrlParser: true});

        let db = mongoose.connection;

        db.on('error', console.error.bind(console, 'connection error:'));

        await db.once('open', function(){
            FatCat.findOne().sort({ date: -1 }).limit(1).exec((err, cat)=>{
                
                if(cat === null){
                    // If cat is equal to null, we don't have ANY cats in the DB
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


// TODO: I had to separate out this function due to its async nature. Unsure if there is another cleaner way to do this.
async function storeCat(cat){
    
    let cats = await getCats()
    let fattestCat = await getFatCat(cats);

    console.log('FATCAT Worker: Getting new fat cat.')

    if(cat !== undefined){
        // If the previous fat cat has a different id, upload the new cats image to cloudinary, otherwise we'll just use the old image
        fattestCat.img = fattestCat.id === cat.id ? fattestCat.img = cat.img : await uploadToCloudinary(fattestCat.img)
    } else {
        // This code is in case no cat exists in the database. We'll just upload the image to cloudinary, considering there ARE no cats.
        fattestCat.img = await uploadToCloudinary(fattestCat.img)
    }

    // Now we store todays fat cat into the database
    storeCatInMongo(fattestCat, process.env.MONGODB_URI, cats)
    .then(()=>{
        console.log('FATCAT Worker: New cat saved in database.')
        // process.exit(1)
    })
}


// START PROGRAM

getAndStoreFatCat();