var keepGoing = true;

var count = 0;
while (keepGoing) {
  console.log('in the loop!');
  console.log(count);
  count = count + 1;
  if (count > 5) {
    keepGoing = false;
  }
}

var count2 = 0;
while (count2 <= 5) {
  console.log('in loop 2');
  count2 += 1; // count2 = count2 + 1
}

/*
 * use a while loop to print hello 10 times
 *
 * use a while loop to print out of every value of an array
 *
 */

var helloCount = 0
while (helloCount <= 10) {
  console.log(helloCount);
  helloCount += 1;
}

var myArray = [3, 5, 10, 20];
var index = 0;
while (index < myArray.length) {
  console.log(myArray[index]);
  index++; // index += 1
}







