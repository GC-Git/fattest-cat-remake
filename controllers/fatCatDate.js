let db = require('./../models')
let dayjs = require('dayjs')

function fatCatDate(req, res) {
    console.log('Getting /api/fatcat/:date')

    try {

        if (!dayjs(req.params.date).isValid()) {
            res.send('Invalid date')
            return;
        }

        let requestedDate = dayjs(req.params.date).valueOf()
        const startOfDay = dayjs(requestedDate).startOf('day').valueOf()
        const endOfDay = dayjs(requestedDate).endOf('day').valueOf()

        db.FatCat
            .find({
                date: {
                    $lt: endOfDay,
                    $gte: startOfDay
                }
            })
            .limit(1)
            .exec((err, cats) => {
                if(err){console.error(err)}
                res.send(cats[0] ? cats[0] : "No cat for this day.")
            })
    } catch (err) {
        console.error(err)
    }
}

module.exports = fatCatDate;