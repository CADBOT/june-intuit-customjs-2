/*
 * @x: Number
 * @y: Number
 *
 * returns Number
 */
function add(x, y) {
  return x + y;
  return undefined; // always here implicitly. undefined is the default return type.
}

function sayHello() {
  console.log('hello');
}

var result = add(2, 4);
console.log(result);
var fullName = add('hank', 'hill');
console.log(fullName);
var result = sayHello();
console.log(result);
console.log(sayHello());

/*
 * Create a function that subtracts two numbers
 *
 * Create function that prints out every entry in an an array
 *
 * Create a recursive function that prints out factorial numbers(advanced)
 *
 */

function sub(x, y) {
  console.log(x);
  console.log(y);
  var result = x - y;
  return result;
}

var x = 5;
var y = 10;

sub(y, x);


function printAll(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
var someArr = [2, 5, 10 20];
var arr = [2, 5, 10 20];

printAll([2, 5, 10 20]);
printAll(someArr);
printAll(arr);


function factorial(n) {
  if (n <= 1) {
    return n;
  }
  return n * factorial(n-1);
}
