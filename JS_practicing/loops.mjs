/// wrong way
// while (h>100) {            infinite run hoga
//   console.log('hasnain');
// }
// try {
//   // let h = 3;
//   let h;
  
//   console.log("h =", h);
  
//   h = 13;


//   for (let h = 2; h < 4; h++) {
//     console.log(h);;
    
//   }

//   while (h < 15) {
//    h++;
//    console.log("hasnain");
//   }

// } catch (error) {
//   console.error("error : ", error);  
// }





/*
forEach sirf Array pr chlta h matlab jb bhi array ki kisi value pr koi 
task perform krna ho to forEach ka use kia jata h                */

// let arr = [1,2,3,4,5,6,7,8]

// if (5 < 1) {
//   arr.forEach((func) => {
//    console.log(func + 2);
//   });
// } else {
//   arr.forEach((func) => {
//    console.log(func - 2);
//   });
// }



// let sdf= [32]
// sdf.forEach(sdfas => {
//   console.log(sdfas -2);
// });

/*
forEach kabhi bydefault main arrray me change nhi krta 
arrray ki temporary copy bana kr k changes kr deta h 

*/
// console.log("sdf is", sdf);
// console.log("arr is ", arr);


/*
Objects pr loop krne k liye ya key or 
values ko access krne k liye forin ka use kiya jata h
*/

// let arr = [1,2,3,4,5,6,7,8]; 
let obj3 = {
  name : "mah",
  age : 23,
  city : "karachi",
  country : "pakistan",
  state : "punjab"
}

// console.log("age :", obj3.age);
// console.log(obj3.country);
// console.log(obj3.city);
// console.log(obj3.name);
for (var aasd in obj3){
  console.log(aasd);
  console.log(aasd, ":", obj3[aasd]);
}
// for (const key in object) {
//   const element = object[key];
// }
// console.log(arr[3]);

// let num = 12;
// while (12 > 20) {
//   console.log(num);
// }