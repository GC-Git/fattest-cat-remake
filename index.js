require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')

// Schemas
const CatSchema = require('./schemas/Cat')

let Cat = mongoose.model('Cat', CatSchema)
let FatCat = mongoose.model('FatCat', CatSchema)

const port = process.env.PORT || 9000

// Database Connection
const database = process.env.MONGODB_URI || 'mongodb://localhost/fatcats'

const app = express()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/hello', (req, res) => {
    res.send('Hello world!')
    console.log(`Hello world!`);
});
  
// TODO: I KNOW this ought to go somewhere else. Figure that out.
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


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/', (req, res) => {
    console.log('Serving react app.')
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
  
app.listen(port);