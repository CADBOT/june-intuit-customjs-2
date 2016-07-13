var numbers1 = [2, 4, 8, 10]
  .map(function(n) {return n * 2})
  .map(function(n) {return n + 1})
  .reduce(function(acc, x) {return acc + x})

var numbers = [2, 4, 8, 10]
  .map(n => n*2);
  .map(n => n+1);
  .reduce((acc, x) => acc + x)

