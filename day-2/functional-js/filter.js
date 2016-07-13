var numbers = [5, 105, 10, 20, 1000];
/*
var newNumbers = [];
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] < 100) {
    newNumbers.push(numbers[i]);
  }
}

var n2 = numbers.filter(function(number) {
  return number < 100;
});
*/

/*
 * using an input array, filter out all
 * even numbers
 */
/*
var n3 = numbers.filter(function(number) {
  return number % 2 !== 0
})

var tempArray = numbers.filter(function(n) {
  return n % 2 === 0
});

var finalResult = tempArray.map(function(n) {
  return n + 10;
})
*/
/*
var result = numbers
  .filter(function(n) {
    return n % 2 === 0
  })
  .map(function(n) {
    return n + 10;
  })

console.log(result)

*/
/*
 * take all numbers less then 100. and 
 * subract 10 from them
 *
 * convert an array of strings to an array
 * of numbers, removing all NaN results
 */
numbers = ['4', '12', 'hello', 'bye', '20']
[4, 12, NaN, NaN, 20]
[4, 12, 20]

var r = numbers.map(function(n) {
  return Number(n) 
}).filter(function(n) {
  return !isNaN(n)
})

console.log(r);




