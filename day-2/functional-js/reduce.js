var numbers = [1, 5, 20];

var result = numbers.reduce(function(acc, number) {
  return acc + number; // 26
}, 0)

console.log(result);

/*
 * multiply all the numbes in an array together
 *
 * concat all the strings in an array into one
 * string. Add a space between each element.
 */
var result = numbers.reduce(function(acc, number) {
  return acc * number; // 26
}, 1)

var strings = ['hello', 'how', 'are', 'you'];
var r = strings.reduce(function(acc, str) {
  return acc + str + ' ';
}, '')

var result = numbers.reduce(function(acc, number) {
  return acc * number; // 26
})
