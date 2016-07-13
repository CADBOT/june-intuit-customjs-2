function Person(name) {
  this.name = name;
  this.sayName = function() {
    console.log('hello my name is ' + this.name);
  }
}

var p1 = new Person('zoidberg');
var p2 = new Person('fry');

console.log(p1.sayName !== p2.sayName);

p1.sayName2 = p2.sayName;
p1.sayName2();

function add(x, y) {
  return x + y;
}

add.num1 = 4;
add.num2 = 6;
console.log(add.num1 + add.num2);
console.log(add(add.num1, add.num2));

add.sub = function(x, y) {
  return x - y;
}

console.log(add.sub(4, 1));
console.log(add.blahSomePropThatIsNotHere);
console.log(add.prototype);

