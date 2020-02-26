// example 1: find all even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter(element => element % 2 === 0);
console.log(evenNumbers); // [ 2, 4, 6 ]

// example 2: remove duplicates
const arrayWithDuplicates = [1, 1, 2, 5, 3, 4, 4, 4,  5, 6, 7];
const arrayWithoutDuplicates = arrayWithDuplicates.filter(
    (element, index, originalArray) =>
        originalArray.indexOf(element) === index);
console.log(arrayWithoutDuplicates); // [ 1, 2, 5, 3, 4, 6, 7 ]


