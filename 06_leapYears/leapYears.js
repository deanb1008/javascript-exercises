const leapYears = function(year) {
   // If the year is divisible by four but not a century year, it is
   // a leap year
    if(year % 4 === 0 && year % 100 !== 0)    
        {
            return true;
        }
    // If the year is a century year it, ordinarily it is not a leap year unless it
    // is divisble by 400
        if(year % 4 === 0 && year % 100 === 0)
         {
           if(year % 400 === 0)
            {
                return true;
            }
         }
        return false;    
   };

// Do not edit below this line
module.exports = leapYears;

