

const fibonacci = function(nthFiboNum) {
    if(typeof nthFiboNum == 'string') 
    {
      nthFiboNum = Number(nthFiboNum);
    }
    if(nthFiboNum < 0)
    {
      return 'OOPS';
    }
    // Here lies the Fibonacci recursive code
    if(nthFiboNum < 2) 
    {
        return nthFiboNum;
    }
    else
    {
      return fibonacci(nthFiboNum - 1) + fibonacci(nthFiboNum - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;

console.log(fibonacci(9));
const count = 20;
const myArray = [];

for(let i = 0; i < count; i++)
{
  myArray.push(fibonacci(i));
}
console.log(myArray);