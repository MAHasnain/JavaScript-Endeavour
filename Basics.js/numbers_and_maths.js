const score = 4333;

const balance = new Number (100);

console.log(balance);



const amount = 10000000;
console.log(amount.toLocaleString('en-PK'));


const amount2 = 145.4546;
console.log(amount2.toPrecision(5));

const otherNumber = 346.383;
console.log(otherNumber.toFixed());


console.log(Math)

console.log(Math.min(2, 4, 8, 23))
console.log(Math.max(345, 876, 345, 38));


let minVal = 10;
let maxVal = 20;

// console.log(Math.floor((Math.random(maxVal - minVal)* 10) + minVal));

console.log(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));