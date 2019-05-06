// Load our environmental variables from .env
require('dotenv').config()
const port = process.env.PORT || 9000

// Helper libraries
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const dayjs = require('dayjs')
const sortObjArrByProp = require('./helpers/sortObjArrByProp')

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
    console.log('Getting /api/fatcat')
    try{

        // TODO: Figure out if we should be creating a new connection every time someone calls the route.
        mongoose.connect(database, {useNewUrlParser: true});
        let db = mongoose.connection


        //TODO: Why does this cause an event listener leak???      db.on('error', console.error.bind(console, 'connection error:'))
        db.once('open', function(){
            FatCat.findOne().sort({ date: -1 }).limit(1).exec((err, cat)=>{
                res.send(cat)
                mongoose.disconnect()                
                return
            })
            return
        })
    } catch(err){
        console.error(err)
    }
})

app.get('/api/fatcat/:date', (req, res)=>{
    console.log('Getting /api/fatcat/:date')

    try{

        if(!dayjs(req.params.date).isValid()){
            res.send('Invalid date')
            return;
        }
    
        let requestedDate = dayjs(req.params.date).valueOf()
        const startOfDay = dayjs(requestedDate).startOf('day').valueOf()
        const endOfDay = dayjs(requestedDate).endOf('day').valueOf()


        mongoose.connect(database, {useNewUrlParser: true});
        let db = mongoose.connection

    
        // db.on('error', console.error.bind(console, 'connection error:'))
        db.once('open', function(){    
            
            FatCat.find({
                date: {
                    $lt: endOfDay,
                    $gte: startOfDay
                }
            })
                .limit(1)
                .exec((err, cats) => {
                    console.log(typeof cats[0])
                    res.send(cats[0] ? cats[0] : "No cat for this day.")
                    mongoose.disconnect()                    
                    return
                })
            return
        })
    } catch(err){
        console.error(err)
    }
})


// Gets all the cats for a particular date
app.get('/api/cats/day/:date', (req, res) => {
    console.log('Getting /api/cats/day/:date')
    try{
        if(!dayjs(req.params.date).isValid()){
            res.send('Invalid date')
            return;
        }

        let requestedDate = dayjs(req.params.date).valueOf()
        const startOfDay = dayjs(requestedDate).startOf('day').valueOf()
        const endOfDay = dayjs(requestedDate).endOf('day').valueOf()

        mongoose.connect(database, {useNewUrlParser: true});
        let db = mongoose.connection
        
        // db.on('error', console.error.bind(console, 'connection error:'))
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
                    mongoose.disconnect()
                    return
                })
            return
        })
    } catch(err){
        console.log("ERROR GETTING /api/cats/:date")
        console.error(err)
    }
})

// Gets all the cats for a particular date range
app.get('/api/cats/range/:dateStart/:dateEnd', (req, res) => {
    console.log('Getting /api/cats/range/:dateStart/:dateEnd')

    try{
        if(!dayjs(req.params.date).isValid()){
            res.send('Invalid date')
            return;
        }

        const startDate = dayjs(req.params.dateStart).startOf('day').valueOf()
        const endDate = dayjs(req.params.dateEnd).startOf('day').valueOf()

        if(startDate > endDate){
            res.send('Start date cannot come after end date.')
        }
        
        mongoose.connect(database, {useNewUrlParser: true});
        let db = mongoose.connection
        
        // db.on('error', console.error.bind(console, 'connection error:'))
        db.once('open', function(){    

            Cat.find({
                date: {
                    $lt: endDate,
                    $gte: startDate
                }
            })

                .limit(1500)
                .exec((err, cats) => {

                    // Set all dates to the beggining of the day
                    for(cat of cats) {
                        cat.date = dayjs(cat.date).startOf('day').valueOf();
                    }

                    let sortedCatsArray = sortObjArrByProp(cats, 'date')
                    
                    res.send(sortedCatsArray)
                    mongoose.disconnect()
                    return
                })
            return
        })
    } catch(err){
        console.log("ERROR GETTING /api/cats/:dateStart/:dateEnd")
        console.error(err)
    }
})

// Reroutes to todays date, getting all the cats for today
app.get('/api/cats/today', (req, res)=>{
    console.log('Getting /api/cats/today')
    res.redirect('/api/cats/day/'+dayjs().format('MM-DD-YYYY'));
})

// Get cats for the last week
app.get('/api/cats/week', (req, res) => {
    console.log('Getting /api/cats/week')
    let today = dayjs().format('MM-DD-YYYY')
    let startDate = dayjs().subtract(7, 'day').format('MM-DD-YYYY')
    res.redirect('/api/cats/range/'+startDate+'/'+today)
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/', (req, res) => {
    console.log('Serving react app.')
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
  


app.listen(port);
console.log('Listening on port: ' + port)