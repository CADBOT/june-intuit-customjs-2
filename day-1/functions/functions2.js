function add(x, y, z) {
  //TODO implement me
  if (!z) {
    return x + y;
  }
  else {
    return x + y + z;
  }
}
function add(x, y, z) {
  x = x || 0;
  y = y || 0;
  z = z || 0;
  return x + y + z; 
}

add(2, 5); // 7
add(1, 1, 3); // 5

// es6 default arguments
function add(x=0, y=0, z=0) {
  return x + y + z;
}

add(2);
add(2, 6);
add(2, 6, 3);




