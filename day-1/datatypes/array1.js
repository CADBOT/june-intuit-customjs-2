//var x = new Array();
var y = [];
y[0] = 4;
y[1] = 10;

console.log(y[4]);

var myStack = [];
myStack.push('hello');
myStack.push('goodbye');
myStack.push(10);

/*
console.log(myStack.pop());
console.log(myStack.pop());
myStack.push('hello again');
console.log(myStack.pop());
console.log(myStack.pop());
*/
/*
 * Step 1: Tinker with arrays. Make a few and set/get some values.
 * Get comfortable with them.
 *
 * Step 2: Create a "stack" using an array. Tinker with it
 *
 * Step 3: Use the MDN javascript array documentation to learn methods
 * to treat an array as a queue. Create and tinker with one
 * HINT. Use tmethods push and shift
 *
 * Time: ~15 minutes
 */

var q = [];
q.push(1);
q.push(2);

console.log(q.shift());
console.log(q.shift());

