let db = require('./../models')

function catId(req, res) {
    try {
        if(!req.params.id){
            return
        }

        db.FatCat
            .find({
                id: req.params.id
            })
            .limit(20)
            .exec((err, fatCats) => {
                if(err){console.error(err)}

                db.Cat
                .find({
                    id: req.params.id
                })
                .limit(20)
                .exec((err, cats) => {
                    if(err){console.error(err)}

                    res.send(cats.concat(fatCats))
                })



            })
        return

    } catch (err) {
        console.error(err)
    }
}

module.exports = catId