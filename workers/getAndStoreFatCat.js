const getFatCat = require('./actions/getFatCat')
const storeCatInMongo = require('./actions/storeCatInMongo')
const uploadToCloudinary = require('./actions/uploadToCloudinary')

async function getAndStoreFatCat(){

    try {
        let fattestCat;

        fattestCat = await getFatCat();

        

        fattestCat.img = await uploadToCloudinary(fattestCat.img)

        storeCatInMongo(fattestCat) // TODO: A second argument takes the database URL, we should get it from an environmental variable
        .then(()=>{
            console.log('New cat saved in database.')
            process.exit(1)
        })
    } catch(err){
        console.log(err)
    }
    
}

getAndStoreFatCat();