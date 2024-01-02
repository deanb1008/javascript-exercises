const helloWorld = require('./helloWorld');

// describe('Hello World', function() 
// {
//   test('says "Hello, World!"', function() 
//   {
//     expect(helloWorld()).toEqual('Hello, World!');
//   });
// });

describe('Hello World', () => 
{ 
  return test('says "Hello, World!"', 
  () => 
    { 
      return expect(helloWorld()).toEqual('Hello, World!')
    })
});
