const findTheOldest = function (array) 
{
  return array.reduce((oldest, currentPerson) => 
    {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
      return oldestAge < currentAge ? currentPerson : oldest;
      // The standard way to do this
      // if(oldestAge < currentAge){
      //   return currentPerson;
      // }
      // else {
      //   return oldest;
      // }
    });
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

module.exports = findTheOldest;
