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
// ===========================
app.get('/api/fatcat', controllers.fatCatToday)
app.get('/api/fatcat/:date', controllers.fatCatDate) 
app.get('/api/fatcat/range/:dateStart/:dateEnd', controllers.fatCatDateRange)

// TODO: allCats route will make this redundant. 
app.get('/api/cats', controllers.catsToday)
app.get('/api/cats/:date', controllers.catsDate)
app.get('/api/cats/range/:dateStart/:dateEnd', controllers.catsDateRange)
// app.get('/api/cats/week', controllers.catsThisWeek)

// TODO: app.get('/api/allCats', controllers.allCatsToday)
// TODO: app.get('/api/allCats/:date', controllers.allCatsDate)
// TODO: app.get('/api/allCats/range/:dateStart/:dateEnd', controllers.allCatsDateRange)

app.get('/api/catId/:id', controllers.catId)
// TODO: app.get('/api/catId/:id/:date', controllers.catIdDate)
// TODO: app.get('/api/catId/:id/range/:dateStart/:dateEnd', controllers.catIdDateRange)

// The "catchall" handler: If they aren't looking for the API, we'll send them the client instead.
app.get('/*', controllers.index);
  


// ===== START APP =====
app.listen(port);
console.log('Listening on port: ' + port)