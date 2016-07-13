/* Java version (kinda)
public class Person {
  public String name;
  public int age;

  public Person(name, age) {
    this.name = name;
    this.age = age;
  }

  public void sayHello() {
    System.out.println("hello my name is " + this.name);
  }
}
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log('Hello my name is ' + this.name);
  }
}

var p = new Person('Kate', 30);

console.log(p.name);
p.sayHello();
