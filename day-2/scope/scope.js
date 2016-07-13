var a = 2;// 6
function outer() {
  var x = 4;
  var a = 6;
  //a = 6;
  function inner() {
    var y = 10;
    var z = x + y + a;
    console.log(z);
  }
  inner();
}
outer();
console.log(a);
