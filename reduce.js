// Example 1: get sum of numbers
const numbers = [1, 4, 2, 5, 6, 3, 5, 5];
const sum = numbers.reduce((currentSum, element) => currentSum + element, 0);
console.log(sum); // 31

// Example 2: frequency
const names = ['John', 'Jane', 'Joe', 'John','Jenny', 'Joe', 'Joe'];
const namesFrequency = names.reduce((current, name) => {
    if(!current[name]) current[name] = 0;
    current[name]++;
    return current;
}, {});
console.log(namesFrequency); // { John: 2, Jane: 1, Joe: 3, Jenny: 1 }
