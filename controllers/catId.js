let db = require('./../models')
let sortObjArrByProp = require('../helpers/sortObjArrByProp')
let dayjs = require('dayjs')

function catId(req, res) {


    try {
        if(!req.params.id){
            res.send("Missing ID parameter.")
            return
        }

        /*
            The ID needs to be queried from both collections since fat cats are not ploced into the cats collection on days they are the fattest cat.
         */

        // Get the fat cats matching the requested ID
        db.FatCat
            .find({
                id: req.params.id
            })
            .limit(20)
            .exec((err, fatCats) => {
                if(err){console.error(err)}

                // Get the 'non-fat' cats with the requested ID
                db.Cat
                .find({
                    id: req.params.id
                })
                .limit(20)
                .exec((err, cats) => {
                    if(err){console.error(err)}
                    // Merge together both queries for a list of entries for the cat with the specified ID
                    let result = cats.concat(fatCats)
                    
                    // Set all dates to the beggining of the day
                    for (item of result) {
                        item.date = dayjs(item.date).startOf('day').valueOf();
                    }

                    // We sort the array of cat entries by date
                    result = sortObjArrByProp(result, 'date')
                    
                    // Any other formatting of data can be done client side to match their requirements

                    res.send(result)
                })
            })

    } catch (err) {
        console.error(err)
    }
}

module.exports = catId