// Load our environmental variables from .env
require('dotenv').config()
const port = process.env.PORT || 9000

// Helper libraries
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const dayjs = require('dayjs')

// Database Connection
const mongoose = require('mongoose')
const database = process.env.MONGODB_URI || 'mongodb://localhost/fatcats'

// Schemas for Mongoose
const CatSchema = require('./schemas/Cat')

// Mongoose models created from Schemas
let Cat = mongoose.model('Cat', CatSchema)
let FatCat = mongoose.model('FatCat', CatSchema)

const app = express()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));




// ===========================
//           ROUTES
// ===========================

// NOTE: Put all API endpoints under '/api'
app.get('/api/hello', (req, res) => {
    res.send('Hello world!')
    console.log(`Hello world!`);
});
  


app.get('/api/fatcat', (req, res)=>{
    try{
        // TODO: Figure out if we should be creating a new connection every time someone calls the route.
        mongoose.connect(database, {useNewUrlParser: true});
        let db = mongoose.connection

        db.on('error', console.error.bind(console, 'connection error:'))
        db.once('open', function(){
            FatCat.findOne().sort({ date: -1 }).limit(1).exec((err, cat)=>{
                res.send(cat)
            })
        })
    } catch(err){
        console.error(err)
    }
})



// Gets all the cats for a particular date
app.get('/api/cats/:date', (req, res) => {
    if(!dayjs(req.params.date).isValid()){
        res.send('Invalid date')
        return;
    }

    let requestedDate = dayjs(req.params.date).valueOf()
    const startOfDay = dayjs(requestedDate).startOf('day').valueOf()
    const endOfDay = dayjs(requestedDate).endOf('day').valueOf()

    mongoose.connect(database, {useNewUrlParser: true});
    let db = mongoose.connection
    
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', function(){    
        
        Cat.find({
            date: {
                $lt: endOfDay,
                $gte: startOfDay
            }
        })
            .limit(50)
            .exec((err, cats) => {
                res.send(cats)
                db.close()
            })
        
    })

})



// Reroutes to todays date, getting all the cats for today
app.get('/api/cats', (req, res)=>{
    res.redirect('/api/cats/'+dayjs().format('MM-DD-YYYY'));
})



// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/', (req, res) => {
    console.log('Serving react app.')
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
  


app.listen(port);