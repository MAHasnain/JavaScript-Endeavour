// Array : group of values


// /// kisi bhi variable me 1 se ziyada value ko store krnae k liye array ka use kiya jta h 


// let a = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
// // console.log(a[0]);
// // console.log(a[2]);
// // console.log(a[1]);
// // console.log(a[4]);
// // console.log(a[3]);

// // pop push shift unshift splice 

// // pop : Array se 1 value ko remove krne k liye pop use kiya jata h 

// console.log(a.pop());
// console.log(a);

// // unshift : array k 0 index pr 1 value ko add krne k liye unshift use kiya jata h 

// console.log(a.unshift(9));
// console.log(a);


// // shift : array k 0 index pr 1 val ko remove krne k liye shift use kiya jata h 

// console.log(a.shift());
// console.log(a);

// // splice : Array me kahin se kisi bhi val ko remove krne k liye splice ka use kiya jaata h 
// /// val ka index num splice k circle bracket me dena hoga  and coma dal k jitni values remove krni hen likhhni hogi

// // console.log(a.splice(0)); 
// console.log(a.splice(2,1));
// console.log(a.splice(0,1));
// console.log(a.splice(5,1)); 
// console.log(a.splice(8,1)); 
// console.log(a); 











// how to copy Reference value    
///   with the help of spread operator (...)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let array = [...arr]


// console.log(arr.pop())
// console.log('array :', array)
// console.log("arr :", arr)





const cars = [
  {
    color : "red",
    engineNumber : 1223334444,
    model : "BMW i8 Roadster"
  },
  {
    color : "Black",
    engineNumber : 55555666666,
    model : "Audi A6"
  },
  {
    color : "white",
    engineNumber : 44445556666,
    model : "Civic 2023"
  }
]

let car = [...cars]



console.log(car.pop());
console.log(car.msg = "obj");
// console.log(car.shift());
// console.log(car.unshift());
// console.log(car.splice(0,1));
// console.log(cars.splice(0,1));

console.log("cars :", cars);
console.log("car :", car);

