//'use strict';
function Person(name, age) {
  /*
   * this = {}
   * setup inher...
   */
  this.name = name;
  this.age = age;
  this.sayName = function() {
    console.log('Hello I am ' + this.name);
  }
  /*
   * return this
   *
   */
}

var p1 = new Person('fry', 25);
//p1.sayName();
//console.log(p1);
/* create your own constructor function
 * explore calling that function with and without the new
 * keyword. and with strict mode on and off
 *
 * additionally explore calling regular functions with the
 * new keyword
 */

var sayName = p1.sayName;
sayName();
p1.sayName2 = sayName;
p1.sayName2()
//console.log(name);
