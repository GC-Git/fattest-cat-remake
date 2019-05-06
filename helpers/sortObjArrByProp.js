function sortObjArrByProperty(data, property){
    if(!data || !property){console.log('Missing arguments'); return;}
    
    let uniqueValues = [...new Set(data.map(item => item[property]))];

    // Empty container. We will fill this up as we go.
    let dataContainer = []

    // We loop through the unique dates for our data
    uniqueValues.forEach(function(value){
        // For each unique date we're going to push a new object containing that date into our data container array. 
        dataContainer.push({
            [property]: value,
            data: []
        })
    })
    
    
    // Loop through the data so we can place each item in the appropriate container
    data.forEach(function(item){
        // For each data item, we need to loop through the container to find the right date. We use a for loop specifically so we can break out of our loop early once we find the right date.
        for(let i=0; i<dataContainer.length; i++){
            // If the dates match, push the data in and break out of the loop.
            if(dataContainer[i][property] === item[property]){
                dataContainer[i].data.push(item)
                break
            }
        }
    })
    
    
    return dataContainer;
}

module.exports= sortObjArrByProperty;