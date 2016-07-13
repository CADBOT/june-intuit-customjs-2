var myArray = [2, 5, 10, 4, 8];

for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}



var i = 0;
while (i < myArray.length) {
  console.log(myArray[i]);
  i++;
}

/*
 * 1. Print out every element of an array
 *
 * 2. Print out every other element of an array
 *
 * 3. print out every third element, starting at the
 * 2nd element
 */

for (var i = 0; i < myArray.length; i+=2) {
  console.log(myArray[i]);
}

for (var i = 1; i < myArray.length; i+=3) {
  console.log(myArray[i]);
}
