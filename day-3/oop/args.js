function add() {
  return Array.prototype.reduce.call(arguments, function(acc, x) {
    return acc + x
  });
}

add(5, 10, 4, 3);

function printName(x, y) {
  console.log(x);
  console.log(y);
  console.log(this.name);
}

var p = {name: 'bill'}
printName('hello');
printName.call(p, 'hello', 4);





