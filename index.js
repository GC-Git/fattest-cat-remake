// Load our environmental variables from .env
require('dotenv').config()
const port = process.env.PORT || 9000

// Helper libraries
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

// Database Connection
const mongoose = require('mongoose')
const database = process.env.MONGODB_URI || 'mongodb://localhost/fatcats'
mongoose.connect(database, {useNewUrlParser: true});
const controllers = require('./controllers')


const app = express()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));




// ===========================
//           ROUTES
// TODO: Separate out into routes folder or file
// ===========================
app.get('/api/fatcat', controllers.fatCatToday)
app.get('/api/fatcat/:date', controllers.fatCatDate)
app.get('/api/fatcat/range/:dateStart/:dateEnd', controllers.fatCatDateRange)
app.get('/api/cats/day/:date', controllers.catsDate)
app.get('/api/cats/range/:dateStart/:dateEnd', controllers.catsDateRange)
app.get('/api/cats', controllers.catsToday)
app.get('/api/cats/week', controllers.catsThisWeek)
app.get('/api/catId/:id', controllers.catId)

// The "catchall" handler: for any request that doesn't match the one above, send back React's index.html file where it will do its own in app routing
app.get('/*', controllers.index);
  
app.listen(port);
console.log('Listening on port: ' + port)