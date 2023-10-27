const sheriyansCodingSchool = () => {
  // functions : some lines of code ko 1 block me kr k naam de dena function kehlata h
  //////         then zaroort pr naam ko call krne se hi whole code run hota h 

  function helloBolo() {
    console.log("hello");
  }
  helloBolo();



  function loops() {
    // for (let i = 32; i < 65; i++) {
    //   console.log(i);

    if (32 > 65) {
      console.log("M.A.H");
    } else {
      console.log("Hasnain");
    }
  }

  loops()


  function num(a, b, c, d) {
    console.log(a * c);
    console.log(a * a);
    console.log(a * b);
  }

  num(4, 2, 7)
  num(7, 2, 4)

}

// sheriyansCodingSchool();  
// sheriyansCodingSchool is reference       
// () is execution




// functions just like a some lines of code ,
// so kisi bhi task ko one ya multiple time perform krne k liye function use kiya jata h


// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// // add(2, 3);

const add = () => {
  const result = 2 + 3;
  return result;
}

const result = add();
console.log(result);


function loggedIn(username) {

}



// const user = {
//   name: "mah",
//   age : 32,
//   email: "mah@gmail.com",
//   loggedIn: true
// }

function handleObj(obj) {
  console.log(`${obj.name} is ${obj.age} old, and now ${obj.name} is loggedIn`);
}

// handleObj({
//   name: "mah",
//   age: 32,
//   email: "mah@gmail.com",
//   loggedIn: true
// });
// handleObj(user);


// const myArr = [
//   name = {
//     firstName: "Muhammad",
//     lastName: "Atta"
//   },
//   contact = {
//     phone: 1234567890,
//     email: "mah@gmail.com"
//   }
// ]

const arrHandle = (arr) => {
  return `${arr[1]} is logged in`
}

console.log(arrHandle([345, 56456, "90qw48"]))

