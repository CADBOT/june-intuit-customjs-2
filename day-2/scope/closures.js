// non closure
function outer() {
  var x = 5;
  function getX() {
    return x;
  }

  function setX(newX) {
    x = newX;
  }
  return {
    getX: getX,
    setX: setX
  }
}

var acc = outer(); 
console.log(acc.getX());
acc.setX(20);
console.log(acc.getX());
/*
 * a person function with variables name and age.
 * you will also include getters/setters for
 * the name and age
 */

function person(initName, initAge) {
  var name = initName;
  var age = initAge;
  // TODO make some functions
  function getName() {
    return name;
  } 
  function setName(n) {
    name = n;
  }
  function getAge() {
    return age;
  }
  function setAge(a) {
    if (age > 0) {
      age = a
    }
  }
  
  return {
    getName: getName,
    setName: setName,
    getAge: getAge,
    setAge: setAge
  } 
}

var p = person('hank', 45);
console.log(p.getName());
p.setName('peggy');
console.log(p.getName());
