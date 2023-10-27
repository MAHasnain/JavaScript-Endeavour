/// singleton object

const userName = new Object();

userName.name = "Muhammad Atta ul Hasnain";
userName.gmail = "mah@gmail.com";
userName.isLoggedIn = false;

// console.log(userName);

const regularUser = {
    email: "mah@gmail.com",
    userFullName: {
        name: {
            firstName: "Muhammad",
            lastName: {
                1: "Atta",
                2: "ul",
                3: "Hasnain"
            }
        },
        surName: "atta",
    },
    id: 4220134823456,
    "D.O.B": {
        day: 32,
        month: 15,
        year: 3035
    },
    address: {
        street: 3,
        houseNumber: "H-2",
        city: "Karachi",
        country: "Pakistan",
        state: "Sindh",
        zipCode: 2345
    },
    "status": "single"
}

console.log(regularUser.status = "married");

console.log(regularUser.userFullName);
console.log(regularUser["D.O.B"]);
console.log(regularUser["status"]);
console.log(regularUser.address.zipCode?.country); ///  optional chaining



const newUser = {...regularUser, ...userName};
console.log(newUser);

// const obj1 = {
//     1: "a",
//     2: "b",
//     3: "c"
// }

// const obj2 = {
//     4: {
//         1: "a",
//         2: "b",
//         3: "c"
//     },
//     5: "b",
//     6: "c"
// }

// // const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = {...obj1, ...obj2};

// console.log(obj3[4][2]);

// console.log(obj3);
