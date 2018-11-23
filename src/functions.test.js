// we requrie the file we are testing
const functions = require('./functions');

// now we want to do our tests, first we pass in a description -> adds...
// after that we type what we expect the answer to be
// functions.add is the file name followed by the variable we've set and we are passing through the parameters and giving it an answer
// to run it we say 'npm test'

// toBe - used for primitive types
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// nottoBe
test('Adds 2 + 2 to NOT equal 4', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
// test('Should be Falsy', () => {
//   expect(functions.checkValue(2)).toBeFalsy();
// });

// toEqual - used for objects
test('User should be mary antar object', () => {
  expect(functions.createUser()).toEqual({firstname: 'mary', lastname: 'mary'});
});


// regex
// there should not be an I in team, we have passed a regular expression
test('There is no i in team', () => {
  expect('team').not.toMatch(/I/);
});


// arrays
// you can use toContain if you want an array to contain something
// test('Admin should be in usernames', () => {
// usernames = ['admin', 'john'];
//   expect(usernames).toContain('admin');
// });


// working with async data
test('user fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser()
  .then(data => {
    expect(data.name).toEqual('Leanne Graham');
  })
});
