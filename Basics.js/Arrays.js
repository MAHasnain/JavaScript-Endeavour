////  Arrays  (Collection of multiple items in single variable)


const cars = ['BMW', "Audi", "lamborghini"];
const bikes = ["yamaha", "suzuki", "honda"];

const all = [...bikes, ...cars];

console.log(all);


let arr = [1, [2, 3], 4, 5, [7, [345, 45], 8], 9]
// let arr2 = arr.flat(1);
let arr2 = arr.flat(Infinity);
// console.log(arr2);

let scr1 = 231;
let scr2 = 34;
let scr3 = 56;
// console.log(Array.of(scr1, scr2, scr3));


// isArray
// from
// of

