function add(x, y) {
  return x + y;
}

var add2 = function(x, y) {
  return x + y;
}

add(2, 4);
add2(2, 4);

var x = 4;
var y = x;

var person = {
  name: 'peggy',
  sayName: function() {
    console.log('my name is peggy')
  }
}

person.sayName();
var yetAnotherAdd = add;
yetAnotherAdd(5, 7);

var num1 = 10;
var num2 = num1;

var func1 = function() {

};
var func2 = func1;

// value types vs ref types
var x = 4;
var y = x;
x += 2;

var obj1 = { x: 4 };
var obj2 = obj1;

obj2.newProp = 4;

obj2.newProp = 5;
console.log(obj1.newProp);
console.log(obj2.newProp);







