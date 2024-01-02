const removeFromArray = function(array1, ...args) {
    const arrayFinal = [];
    array1.forEach( (element) => { 
        if(!args.includes(element)) 
        {
            arrayFinal.push(element);
        }
    });
    return arrayFinal;
};

// Do not edit below this line
module.exports = removeFromArray;
