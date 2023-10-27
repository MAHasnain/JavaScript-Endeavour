// Objects Literals





let JSUser = {
  name: "M.A.H", 
  "full name" : "Muhammad Atta ul Hasnain",
  age: 22,
  jaahilhai: false
}

console.log(JSUser["full name"]);


const {name, jaahilhai} = JSUser;
console.log(name);
console.log(jaahilhai);


/// 1 se ziyadda bnde ki bat ki  ye ARRAY h 
///   1 bnde ki all details 


// let ali = {
//   naam : "muhammad Ali",
//   wifeKiTadad : 1,
//   wifeKaNaam : "Meera Ali",
//   bachoKiTadad : 3,

// }

// console.log(ali.wifeKiTadad);
// console.log(ali.wifeKaNaam);
// console.log(ali.bachoKiTadad);





// how to copy Reference value
//    with the help of spread operator

// let obj = {
//   firstName : "atta",
//   lastName : "hasnain",
//   age : 323
// }


// let objCopy = {...obj}

// console.log(objCopy);
// console.log(objCopy.surName = "atta");
// console.log(objCopy.status = "single");

// console.log("objCopy : " , objCopy.firstName);
// console.log("objCopy : " , objCopy);



// try {
  
// let username = {
//  name: "mah",
//  gmail: "mah@gmail.com",
//  password: "****",
// };

// let login = { ...username };

// console.log((username.DOB = "32-13-35"));
// console.log("username :", username);

// console.log((login.fullName = "Muhammad Atta ul Hasnain"));
// console.log("login :", login);
// console.log("username", username);


// } catch (error) {
//   console.error("error :", error);
// }


let user = {
  name : "ali",
  Id : 432,
  DOB : "32-21-23",
  password : "****"
}

let user2 = {...user};

// console.log(user2.maritalStatus = "single");
// console.log(user2.marride = "false");
// console.log(user.newPassword = "******");
// console.log("user :", user);
// console.log("user2 :", user2);








