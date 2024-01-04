const palindromes = function (deeString) {
    const deeStringStripped = deeString.toLowerCase().replace(/[^a-z0-9]/g, "");
    let revdeeString = deeStringStripped.split("").reverse().join("");
    
    if(revdeeString == deeStringStripped)
    {
        return true;
    }
    else
    {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

  
  
  
  