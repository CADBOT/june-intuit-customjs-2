var numbers = [5, 2, 1, 30];
var newNumbers = [];
numbers.forEach(function(number) {
  var newNumber = number * 10;
  newNumbers.push(newNumber);
})

var newNums2 = numbers.map(function(number) {
  return number * 10;
});

/*
 * use map for all of these problems
 *
 * 1. from an input array, generate a new
 * array with 1 added to each number
 *
 * 2. from an input array, if a number is
 * even, multiply it by 2. If it's odd subtract
 * 1 from it
 *
 * 3. convert an array of strings, to an array
 * of numbers
 */
var n1 = [2, 5, 10].map(function(number) {
  return number + 1;
});

var n2 = [5, 2, 1].map(function(number) {
  /*
  if (number % 2 == 0) {
   return number * 2;
  }
  else {
    return number - 1;
  }
  */
  return (number % 2 == 0) ? number * 2 : number - 1;
});

var inputs = ['3', '4', 'hello'];
var n3 = inputs.map(function(number) {
  return Number(number);
});


