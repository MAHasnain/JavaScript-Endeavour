"use strict";
// var v = 4;
// var c = 6; 
// var b = c + v; 
// console.log(b);

// var hieght = 15; 
// var weight = 98;
// var square = weight - hieght; 
// console.log(square);


// var myName = "hasnain";
// var shirtColor = "white";

// console.log(shirtColor);
// console.log(myName); //statement one 


// var myBike = {
//     name: "harleyDavidson",
//     modelNumber: "Has432",
//     number: 12345,    
// };

// console.log(myBike.name);
// console.log(myBike.modelNumber);
// console.log(myBike.number);

// console.log(myBike);


// var the = 1;
// var first = 4;
// var name = 3;

// var lastName = the - first - name;
// console.log(lastName);


// var bike = "harley davidson";
// var car = "audi_A4";

// console.log(car);
// console.log(bike);


// var atta = {
//  myName: "hasnain",
//  marks: 75,
// }

// console.log(atta.myName);
// console.log(atta.marks);






////   PRIMITIVE DATA TYPES    

// Number   427
// null   (empty) / standalone value
// String   "MAHs"
// Symbol    unique
// BigInt       
// Boolean     true/false
// undefined    (undefined)

console.log(typeof null);
console.log(typeof undefined);

let id = Symbol(12345);
let otherId = Symbol(12345);

console.log(id);
console.log(typeof otherId);
// console.log(BigInt);



////  NON PRIMITIVE DATA TYPES   (return object)

const myfunc = function mah(age, hieght, weight) {
    age = 23;
    hieght = 56;
    weight = 59
}

console.log(typeof myfunc);
// return (age, hieght, weight);

let obj = [1, 3, 5, 7, 9];
console.log(typeof obj);



// MEMORY ALLOCATION
// PRIMITIVE                                NON-PRIMITIVE
//  STACK                                       HEAP
// (data ka copy milta h)                     (original value ka referance milta h yani original value me hi changes hongy)

let myName = "MAH";
let shortForm = myName;

shortForm = "Atta";

console.log(shortForm);
console.log(myName);


let lang = "javascript";
let myFavouriteLang = lang;

console.log(myFavouriteLang);
myFavouriteLang = "JS";

console.log(myFavouriteLang);
console.log(lang);

let myObj = {
    name : "mah",
    age : 22,
    email : "mah@gmailcom"
}

let myObj2 = myObj;

myObj2.email = "mah@emailcom";

console.log(myObj2.email);
console.log(myObj.email);

