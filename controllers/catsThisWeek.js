const dayjs = require('dayjs')

function catsThisWeek(req, res){
    console.log('Getting /api/cats/week')
    let today = dayjs().format('MM-DD-YYYY')
    let startDate = dayjs().subtract(7, 'day').format('MM-DD-YYYY')
    res.redirect('/api/cats/range/'+startDate+'/'+today)    
}

module.exports = catsThisWeek