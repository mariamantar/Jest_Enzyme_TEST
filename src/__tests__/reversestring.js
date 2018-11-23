const reverseString = str =>
str
  // we split the string, reverse it and join it back to a string
 .split('')
 .reverse()
 .join('');

 module.exports = reverseString;
