'use strict';
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log('Hello my name is ' + this.name);
}

var p1 = new Person('amanda');

var sayName = p1.sayName;
//sayName();

var someObj = {
  name: 'bob',
}
someObj.sayName = sayName;
someObj.sayName();

/*
 * Create (or reuse) a constructor with some properties
 * and some methods
 *
 * Create some instances from that constructor
 *
 * Create some objects NOT using the constructor
 * that have the same properties
 *
 * Use the methods from the constructor, with objects
 * NOT created using the constructor
 *
