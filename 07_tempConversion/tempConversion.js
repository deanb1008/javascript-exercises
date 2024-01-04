// Using toFixed(1) returns a string and so fails the test
// Using Math.round(num * 10) rounds ten times the number up or down
// Then we didvide by 10 to bring it back to 1 dec place
const convertToCelsius = function(degFaren) {
  let degCel = (degFaren - 32) * (5/9);
  return (Math.round(degCel * 10) / 10);
};

const convertToFahrenheit = function(degCel) {
  let degFaren = degCel*(9/5) + 32;
  return (Math.round(degFaren * 10) / 10);
};

// Do not edit below this line
module.exports = { convertToCelsius, convertToFahrenheit };
