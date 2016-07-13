function outer() {
  function inner() {
    x = 4;
  }
  inner();
}

outer();
console.log(x);
