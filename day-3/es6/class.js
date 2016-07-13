function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function() {
  console.log('hello from ' + this.name);
}

//import {Person2} from 'somefile'
import Person2 from 'somefile'

export default class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log('hello from ' + this.name);
  }
}
