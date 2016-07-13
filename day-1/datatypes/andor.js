var condition1 = true;
var condition2 = true;

if (((condition1) && (condition2))) {
  console.log('both true');
}

if (((true) && (true))) {
  console.log('both true');
}

if ((true)) {
  console.log('both true');
}

var x = condition1 && condition2;
console.log(x);

// short circuit eval
var other = true;
if (false && other) {
  console.log('will never reach');
}

var result = 14 || 10

var someNumber = 5;

someNumber = someNumber || 10;
