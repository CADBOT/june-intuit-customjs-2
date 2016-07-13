var names = ['bill', 'hank', 'sally'];

/*
// old way
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// the new way
names.forEach(function(name) {
  console.log(name);
});

*/
function sayHello(name) {
  console.log('hello ' + name);
}

names.forEach(sayHello);



