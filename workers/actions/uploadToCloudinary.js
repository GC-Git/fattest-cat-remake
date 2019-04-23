const cloudinary = require('cloudinary')

async function uploadToCloudinary(url){
    let newUrl;
    await cloudinary.uploader.upload(url,{tags:'basic_sample'},function(err,image){
        if (err){ console.warn(err);}
    }).then(function(results){
        newUrl = results.url
    });

    return newUrl
}


module.exports = uploadToCloudinary;

// Example usage:
// uploadToCloudinary('pizza.jpg').then((result)=>{
//     console.log(result)
// })