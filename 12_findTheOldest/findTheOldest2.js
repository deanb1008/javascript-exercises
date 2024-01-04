
function getTheAge(birth, death) 
    {
        if(!death) // i.e. still alive 
            {
                return (new Date().getFullYear() - birth)
            }
        else 
            {
                return (death - birth);
            }
    }

// const findTheOldest5 = function(personArray)
//     {
//         return personArray.reduce((oldestPerson, nextPerson) =>
//             {
//                 const oldestAge = getTheAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
//                 const nextPersonAge = getTheAge(nextPerson.yearOfBirth, nextPerson.yearOfDeath);
//                 return oldestAge < nextPersonAge ? nextPerson: oldestPerson; // Return the whole object
//             });
//     };

    const findTheOldest = function(personArray)
    {
        return personArray.reduce((oldestPerson, nextPerson) =>
            {
                const oldestAge = getTheAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
                const nextPersonAge = getTheAge(nextPerson.yearOfBirth, nextPerson.yearOfDeath);
                return oldestAge < nextPersonAge ? nextPerson: oldestPerson; // Return the whole object
            });
    };

    
    module.exports = findTheOldest;