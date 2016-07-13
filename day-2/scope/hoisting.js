console.log(abba);
function someFunction() {
  console.log(x);
  var x = 4;
  var y = 10;
  var z = x + y;
}
var abba = 5;
function someFunctionToJs() {
  var x, y, z;
  console.log(x);
  x = 4;
  y = 10;
  z = x + y;
}

someFunction();

// TODO rewrite it hoisted
function hoisty() {
  var a = 2;
  var b = a + 4;
  b = a;
  var c = b + 2;
}













