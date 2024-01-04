const add = function(num1, num2) {
	return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(array) {
  let tot = 0;
  for(let i = 0; i < array.length; i++)
  {
    tot += array[i];
  }
  return tot;
};

const multiply = function(array) {
  let multTot = 1;
  for(let i = 0; i < array.length; i++)
  {
    multTot *= array[i];
  }
  return multTot;
};

const power = function(base, index) {
	return base ** index;
};

const factorial = function(number) {
  if(number == 0 || number == 1) 
  {
    return 1;
  }
  if(number > 0)
    return( number * factorial(number - 1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
