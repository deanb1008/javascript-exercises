const sumAll = function(num1, num2) {
    let tot = 0;
    let bigger, smaller;

    if(num1 < num2) 
    {
         bigger = num2;
         smaller = num1;
    }
    if(num1 > num2) 
    {
         bigger = num1;
         smaller = num2;
    }
    if(num1 < 0 || num2 < 0 )
    {
        return ('ERROR');
    }

    // have to use typeof to test whether num1 or num2 is a number or not
    // Tried using Number.isNaN(num1) but this converts argument to a number if it can
    if(typeof (num1) !== 'number' || typeof (num2) !== 'number' )
    {
        return ('ERROR');
    }


    for(let i = 0; i < bigger - smaller + 1; i++)
    {
        tot += smaller + i;
    }
    return tot;
};

// Do not edit below this line
module.exports = sumAll;
