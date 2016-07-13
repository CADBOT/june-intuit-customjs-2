function add(x, y) {
  return x + y;
}

add(2, 5);
add(2, 2);
add(2, 7);
add(2, 10);
add(2, 1);
add(2, 8);

function add2(y) {
  return 2 + y;
}

add2(5); //7
add2(2); //4
add2(7); //9
add2(10);
add2(1);
add2(8);

var add3 = addGenerator(3);
add3(5); //8
add3(7); //10

function addGenerator(x) {
  return function(y) {
     return function(z) {
       return x + y + z;
     }
  }
}

var r1 = addGenerator(3)(2)(5);
var r1 = addGenerator(3)(2)(5);
var x = addGenerator(3)(2);
var r2= x(5);
var y = addGenerator(3);
var r3 = y(2)(5);
console.log(r1);
console.log(r2);
console.log(r3);
console.log(x);
console.log(y);



