var person = {name: 'bill', age: 32};
//var name = person.name;
//var age = person.age;

var {name: personName, age: personAge} = person;
var {age: personAge, name: personName} = person;
var {age: personAge} = person;

var {name, age} = person
console.log(name);
console.log(age);
