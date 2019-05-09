let db = require('./../models')
let dayjs = require('dayjs')

function catsDate(req, res){
    console.log('Getting /api/cats/day/:date')
    try{
        if(!dayjs(req.params.date).isValid()){
            res.send('Invalid date')
            return;
        }

        let requestedDate = dayjs(req.params.date).valueOf()
        const startOfDay = dayjs(requestedDate).startOf('day').valueOf()
        const endOfDay = dayjs(requestedDate).endOf('day').valueOf()

            db.Cat
                .find({
                    date: {
                        $lt: endOfDay,
                        $gte: startOfDay
                    }})
                .limit(50)
                .exec((err, cats) => {
                    if(err){console.error(err)}
                    res.send(cats)
                    return
                    })
    } catch(err){
        console.log("ERROR GETTING /api/cats/:date")
        console.error(err)
    }
}

module.exports = catsDate