let db = require('./../models')
let dayjs = require('dayjs')
let sortObjArrByProp = require('../helpers/sortObjArrByProp')

function catsDateRange(req, res) {

    console.log('Getting /api/cats/range/:dateStart/:dateEnd')

    try {
        if (!dayjs(req.params.date).isValid()) {
            res.send('Invalid date')
            return;
        }

        const startDate = dayjs(req.params.dateStart).startOf('day').valueOf()
        const endDate = dayjs(req.params.dateEnd).startOf('day').valueOf()

        if (startDate > endDate) {
            res.send('Start date cannot come after end date.')
        }

        db.Cat
            .find({
                date: {
                    $lt: endDate,
                    $gte: startDate
                }
            })

            .limit(1500)
            .exec((err, cats) => {
                if(err){console.error(err);}

                // Set all dates to the beggining of the day
                for (cat of cats) {
                    cat.date = dayjs(cat.date).startOf('day').valueOf();
                }

                let sortedCatsArray = sortObjArrByProp(cats, 'date')

                res.send(sortedCatsArray)
            })

    } catch (err) {
        console.log("ERROR GETTING /api/cats/:dateStart/:dateEnd")
        console.error(err)
    }

}

module.exports = catsDateRange