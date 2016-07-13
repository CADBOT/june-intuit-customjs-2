debugger;
function wrapper(callback) {
  console.log('calling the function');
  callback();
  console.log('done calling the function');
}

var sayHello = function() {
  console.log('hello')
}

wrapper(sayHello);

/*
 * callFive
 *
 * any function 
 * passed into it, 
 * will be
 * invoked five times
 *
 * use callFive 
 * with both a 
 * named function,
 * and an anon 
 * function
 */
function callFive(cb) {
  for (var i = 0; i < 5; i++) {
    cb();
  }
}

function helloWorld() {
  console.log('hello world');
}

callFive(helloWorld);
callFive(function() {
  console.log('running an anon function!');
});





