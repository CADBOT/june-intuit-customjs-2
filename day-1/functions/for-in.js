var obj = {
  'name': 'bill',
  'age': 50,
  'nestedObj': {
    x: 4
  }
};

for (var prop in obj) {
  console.log(typeof prop)
  if (prop === 'nestedObj') {
    var nested = obj[prop];
  }
}
for (var prop in obj) {
  if (typeof obj[prop] == 'Object') {

  }
}

/*
 * {x: 4,: y: 10, z: 5}
 */

obj = {
  "x": 4,
  "y": 10,
  "z": 5
}
function copy(obj) {
  var newObj = {};
  for (var prop in obj) {
    //newObj[prop] = obj[prop];
    console.log(prop + ' ' + obj[prop])
  }
  return newObj;
}

var myCopy = copy(obj);
console.log(obj !== myCopy); // true
obj.name = 'hello';
myCopy.name = 'goodbye';
console.log(obj.name !== myCopy.name);


for (var key in obj) {

} 

var key = 'x';
obj['x'];
obj[key];

// 1.Print out every key of an object
function printKeys(obj) {
  for (var whatever in obj) {
    console.log(whatever);
  }
}

// 2.Print out every value of an ojbect
function printValues(obj) {
  var someObj = {}
  for (var whatever in obj) {
    var value = obj[whatever];
    someObj[whatever] = value;
    console.log(value);
  }
}




