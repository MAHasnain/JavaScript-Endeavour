// new  1. empty object create hota h 
//       (new instance create hota h object ka)
//      2. constructor function call hota h new keyword se
//      3. 

const user = {
    userName: "MAH",
    age: 23,
    isSignedIn: true,

    getDetails: function () {
        console.log(`username : ${this.userName}`)
    }
}

// console.log(user.userName);




function User(email, isLoggedIn, signInCount) {
    this.email = email,
        this.isLoggedIn = isLoggedIn,
        this.signInCount = signInCount
    return this
}

const userOne = User(`mahatta@gmail.com`, true, 23);
const userTwo = User(`muhatta@gmail.com`, false, 45);


// console.log(userOne);


const userThree = new User(`muhatta@gmail.com`, true, 45);

const userFour = new User(`muhatta427@gmail.com`, false, 45);
// console.log(userFour);

const userFive = new User();
// console.log(userFive);





function multiplyby5(num) {
    return num * 5
}

let result = multiplyby5(7)
console.log(result);

// result = multiplyby5.power
result = multiplyby5.prototype
console.log(result);



