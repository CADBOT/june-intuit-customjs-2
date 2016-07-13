var myObj = {
  id: 3,
  name: 'Bob',
  job: 'engineer'
};

console.log(myObj['job']);

var myJob = myObj['job'];
console.log(myJob);
myObj['job'] = 'unemployed :(';
console.log(myObj['job']);

delete myObj['job']
console.log(myObj['job']);

console.log(myObj.name);
console.log(myObj['name']);
console.log(myObj.id);
console.log(myObj['id']);

var someProp = 'id';
console.log(myJob[someProp]);
console.log(myJob.someProp); // not what we want. a common bug
console.log(myJob['someProp']);


var nestedObj = {
  innerObj: {
    x: 4,
    y: 10,
    innerInner: {

    }
  },
  y: 10
}
nestedObj.innerObj.x
var inner = nestedObj.innerObj;
inner.x;
/*
 * Make an object with at least 3 properties
 *
 * Make at least one property another object
 *
 * Make at least one property an array
 *
 * Try out both [] and . syntax for objects
 */

var myExample = {
  name: 'billy',
  hobbies: ['biking', 'running', 'swimming'],
  pets: [
    {
      type: 'cat',
      name: 'Sally'
    },
    {
      type: 'dog',
      name: 'spot'
    }
  ]
}

myExample.pets[0].name;
