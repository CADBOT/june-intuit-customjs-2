/*
 * from an array of People objects take all the
 * ages between 20-50. (map, filter, map, reduce)
 *
 * add 2 to them.
 *
 * then sum them all together
 *
 */

var people = [
  {name: 'bill', age: 20},
  {name: 'beth', age: 100}
]

var result = people
  .map(function(person) {
    return person.age
  })
  .filter(function(age) {
    return (age >= 20 && age <= 50)
  })
  .map(function(age) {
    return age + 2;
  })
  .reduce(function(acc, age) {
    return acc + age;
  })





