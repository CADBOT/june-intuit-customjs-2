// function expression vs statement scope
console.log(sayHello);
console.log(sayHello2);

var sayHello = function() {
  console.log('hello');
}

function sayHello2() {
  console.log('hello');
}
