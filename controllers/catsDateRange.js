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

        // Getting the number of milliseconds since 1970
        // TODO: Should we use endOf() for the endDate?
        let startDate = dayjs(req.params.dateStart).startOf('day').valueOf()
        let endDate = dayjs(req.params.dateEnd).startOf('day').valueOf()

        // Flip startDate and endDate if they are in the wrong order
        if (startDate > endDate) {
            let buffer = startDate
            startDate = endDate
            endDate = buffer
        } 
        
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