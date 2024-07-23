// this

let user = {
    userName: "MAHasnain",
    age: 456,
    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to the website`);
        console.log(this);
    }  
}
// console.log(this);  // {}      global me koi context nhi h so empty object return kr rha h    (browser me global object window hota h)

// user.welcomeMessage();
// user.userName = "attaulhasnain";
// user.welcomeMessage();


// Arrow Function

// Explicit return
const addTwo1 = (num1, num2) => {
    return num1 + num2;
}


// implicit return
// const addTwo2 = (num1, num2) => (num1 + num2) 

// for return Object
const addTwo2 = (num1, num2) => ({userName : "MAH"}) 
console.log(addTwo2());


