// Example 1: Return array of prices from array of objects
const priceObjects = [
    { price: 11.11 }, { price: 42.42 },
    { price: 99.99 }, { price: 29.99 }
];
const prices = priceObjects.map(element => element.price);
console.log(prices); // [ 11.11, 42.42, 99.99, 29.99 ]
