const mongoose = require('mongoose')

async function storeCatInMongo(cat, database='mongodb://localhost/fatcat'){

    // We'll use this to check if cat.img is a url
    var urlExpression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var regex = new RegExp(urlExpression);

    // Type checking
    if(!typeof cat === 'object'){throw new Error("Arg is not an object.")}
    if(!typeof cat.name === 'string'){throw new Error("cat.name is wrong type")}
    if(!typeof cat.weight === 'number'){throw new Error("cat.weight is wrong type")}
    if(!typeof cat.img === 'string'){throw new Error("cat.img is wrong type")} 
    else if(!cat.img.match(regex)){throw new Error('cat.img is not a url')}



    mongoose.connect(database, {useNewUrlParser: true});

    let db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    await db.once('open', function(){
        // TODO: Schemas should live in a separate folder
        var catSchema = new mongoose.Schema({
            name: String,
            weight: Number,
            img: String,
        })

        var Cat = mongoose.model('Cat', catSchema)

        var newCat = new Cat({
            name: cat.name,
            weight: cat.weight,
            img: cat.img
        })

        newCat.save(function(err, newCat){
            if(err) return console.error(err);
        })
    })
}

module.exports = storeCatInMongo