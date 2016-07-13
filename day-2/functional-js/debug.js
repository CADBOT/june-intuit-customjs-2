debugger;
function wrapper(cb) {
  console.log('in wrapper');
  cb();
}

function hello() {
  console.log('in hello');
}

wrapper(hello);
