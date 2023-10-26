console.log("slice (immutable)")
//  slice array k kisi part ko nikal k deta h but change nhi krta h jis wajah se ye immutable kehlata h



let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.slice(2, 3)); /// [ 3 ]
console.log(arr.slice(2, 5)); // [3, 4, 5]  
// console.log(arr.slice(2, 5)); 2 is start point and 5 is endpoint  



console.log("splice (mutable)")
// slice array k kisi part ki copy bana deta h 
// jb k splice array k kisi part ko hata deta h

let arrr = [1, 2, 3, 4, 5, 6, 7, 8];
 
console.log(arrr.splice (2, 4)); /// [3, 4, 5] =>  1, 2, 6, 7, 8
console.log(arrr.splice (1, 3)); ///  1 is index number(jis index se start krna h) and 3 is quantity of members 

    
