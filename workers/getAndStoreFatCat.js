const getFatCat = require('./actions/getFatCat')
const storeCatInMongo = require('./actions/storeCatInMongo')

getFatCat()
    .then((fattestCat)=>{
        storeCatInMongo(fattestCat) // TODO: A second argument takes the database URL, we should get it from an environmental variable
            .then(()=>{
                console.log('New cat saved in database.')
                process.exit(1)
            })
    })

