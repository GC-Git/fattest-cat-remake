let db = require('./../models')
let dayjs = require('dayjs')
let sortObjArrByProp = require('../helpers/sortObjArrByProp')

function fatCatDateRange(req, res) {
    try {

        // Type checking the date.
        if (!dayjs(req.params.date).isValid()) {
            res.send('Invalid date')
            return;
        }

        // Getting the number of milliseconds since 1970
        // TODO: Should we use endOf() for the endDate?
        const startDate = dayjs(req.params.dateStart).startOf('day').valueOf()
        const endDate = dayjs(req.params.dateEnd).startOf('day').valueOf()

        // Flip startDate and endDate if they are in the wrong order
        if (startDate > endDate) {
            let buffer = startDate
            startDate = endDate
            endDate = buffer
        }

        console.log("Start Date: " + startDate)
        console.log("End Date: " + endDate)        

        // Get the fattest cats of the day within the date range. 1 per day.
        db.FatCat
            .find({
                date: {
                    $lt: endDate,
                    $gte: startDate
                }
            })

            .limit(365)
            .exec((err, cats) => {
                if(err){console.error(err);}

                for (cat of cats) {
                    cat.date = dayjs(cat.date).startOf('day').valueOf();
                }

                // We sort the array of cat entries by date
                let sortedCatsArray = sortObjArrByProp(cats, 'date')

                res.send(sortedCatsArray)
            })
            return
    } catch (err) {
        console.error(err)
    }

}

module.exports = fatCatDateRange