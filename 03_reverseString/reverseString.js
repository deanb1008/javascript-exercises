
const reverseString = (theString) => {
    let revString = '';
    for(let i = theString.length - 1; i >= 0; i--)
    {
        revString += theString[i];
    }
    return revString;
};


// Do not edit below this line
module.exports = reverseString;
