const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `index: ${index}, accumulator: ${accumulator}, currentValue: ${currentValue}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);
console.log('\n');

const myArray = [3, 4, 5, 6];
const initialValue = 7;

function builder (aggregator, presentValue, index)
{
	const theBuild = aggregator + presentValue;
  console.log(`index: ${index}, aggregator: ${aggregator}, presentValue: ${presentValue}, initial value: ${initialValue} , theBuild: ${theBuild}`);
  return theBuild;
}

myArray.reduce(builder, 7);
console.log('\n');

function subtractor (cumulator, presentValue, index)
{
	const thesubResult = cumulator - presentValue;
  console.log(`index: ${index}, cumulator: ${cumulator}, presentValue: ${presentValue}, thesubResult: ${thesubResult}`);
  return thesubResult;
}

console.log('\n');
myArray.reduce(subtractor, 8);

const myNewArray = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67];

function multiplier(accum, newbee, index)
{
	const product = accum * newbee;
  console.log(`index: ${index}, arrayValue: ${myNewArray[index]}, product ${index + 1}: ${product}`);
  return product;
}

myNewArray.reduce(multiplier, 1);
