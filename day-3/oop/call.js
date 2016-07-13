'use strict';
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function() {
  console.log('my name is ' + this.name);
}
Person.prototype.sayAge = function() {
  console.log('my name is ' + this.age);
}

var p1 = new Person('zoe', 40);
var sayName = p1.sayName;
//sayName();
//
var o1 = {name: 'bill'}
Person.prototype.sayName.call(o1);
Person.prototype.sayAge.call(o1);
