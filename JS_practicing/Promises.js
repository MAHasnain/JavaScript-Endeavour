// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = "something went wrong."
//         // error = false;
//         if (!error) {
//             resolve({ username: "MAH", age: 19 })
//         } else {
//             reject (error)
//         }
//     }, 1000);
// })


// promiseOne.then(function (user) {
//     console.log(user)
// }).catch(function (error) {
//     console.log(error)
// });


const arr = [1, 2, 3, 4]
arr[0] = 3;
arr[1] = 5;
arr[2] = 7;
arr[3] = 9;





console.log(arr)




// promiseTwo
// const promiseTwo = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = `something went wrong.`;
//         // error = false;

//         if (!error) {
//             resolve({ user: "MAH", age: 23 })
//         } else {
//             reject(error)
//         }
//     }, 1000);
// });

// async function consumePromiseFive() {
//     try {
//         const res = await promiseTwo
//         console.log(res);
//     } catch (error) {
//         console.log(error)
//     }
// };

// consumePromiseFive();



const URL = "https://randomuser.me/api/";

// async function getRandomUser() {
//     try {
//         const res = await fetch(URL);


//         console.log(res);
//     } catch (error) {
//         console.log(error)
//     }
// };

// getRandomUser();

// fetch(URL).then((res) => {
//     console.log(res)
//     return res.json();
// }).then((data) => {
//     console.log(data)
// }).catch(function (error) {
//     console.log(error)
// });
