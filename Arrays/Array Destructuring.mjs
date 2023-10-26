//  Array Destructuring
// 

const arr = [3, 2, 7, 4, 9]

// {     not recommended because long way                                 

// const arr1 = arr[0];   
// const arr2 = arr[1];  
// const arr3 = arr[2];
// const arr4 = arr[3];
// const arr5 = arr[4];

// }


///  destructuring ka concise and convenient tareeqa  (short way)
const [arr1, arr2, arr3, arr4, arr5] = arr;

console.log(arr); // [3, 2, 7, 4, 9]
console.log(arr4, arr2);


/// rest operators (...)
// agr array k remaining values ko ik hi variable me store krana h to rest oprt ka use kiya jata h    

const newArray = [3, 9, 4, 8, 5, 7] ;

const [newArray1, newArray2, ...remValinNewVar] = newArray;


console.log(newArray); // [3, 9, 4, 8, 5, 7]
console.log(newArray1, newArray2); // 3, 9
console.log(remValinNewVar);
