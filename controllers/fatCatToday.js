let db = require('./../models')

function fatCatToday(req, res) {
    try {
        db.FatCat
            .findOne()
            .sort({
                date: -1
            })
            .limit(1)
            .exec((err, cat) => {
                if(err){console.error(err)}
                res.send(cat)
            })
        return

    } catch (err) {
        console.error(err)
    }
}

module.exports = fatCatToday