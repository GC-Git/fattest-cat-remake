require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const getAndStoreFatCat = require('./workers/getAndStoreFatCat')

// TODO: Don't use this here. This is just to show it works with environmental variables

const port = process.env.PORT || 9000

const app = express()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/hello', (req, res) => {
    res.send('Hello world!')
    console.log(`Hello world!`);
});
  

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/', (req, res) => {
    console.log('Serving react app.')
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
  
app.listen(port);