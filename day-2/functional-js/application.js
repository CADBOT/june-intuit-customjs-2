var people = [
  {name: 'bill', age: 2},
  {name: 'beth', age: 30}
];
debugger;

/*
 * get an array of ages from this
 */

var ages = people.map(function(person) {
  return person.age
});
