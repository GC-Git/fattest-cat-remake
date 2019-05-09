const dayjs = require('dayjs')

function catsToday(req, res){
    console.log('Getting /api/cats/today')
    res.redirect('/api/cats/day/'+dayjs().format('MM-DD-YYYY'));
}

module.exports = catsToday