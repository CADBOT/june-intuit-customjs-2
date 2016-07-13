/*
public class Person {
  public string name;
  public Person(name) {
    this.name = name;
  }

  public void sayName() {
    System.out.println("Hello my name is " + this.name);
  }
}
*/

/*
 * Refactor your constructor functions to place
 * its methods on the prototype instead.
 *
 * Make these observatios.
 *
 * Person.prototype and p1.__proto__ point to the same object
 *
 * p1 will look at properties in its __proto__ if it can't
 * find them on itself.
 *
 * All instances of Person share Person's prototype
 *
 */
function Person(name) {
  /*
   * this = {}
   * this.__proto__ = Person.prototype
   */
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log('hello my name is ' + this.name);
};

var p1 = new Person('bill');
var p2 = new Person('sally');

console.log(p1.__proto__ === p2.__proto__);
console.log(p1.__proto__ === Person.prototype);
