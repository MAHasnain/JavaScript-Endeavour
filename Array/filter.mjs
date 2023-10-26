// let arr = [1,2, 3, 4, 5, 6, 7, 8, 9, 2];

// let ans = arr.filter(function (val) {
//   if (val % 2 == 0) {
//     return true
//   }
// });

// console.log(ans);



// let names = ["ali", "hasnain", "yunus", "yahya", "usman", "orhan"];

// var ans = names.filter(function (val) {
//     if(val.split("a").length <=2)return true;
// })

// console.log(ans);

// console.log("muhammadAtta".split("a"));







let names = ["fahad", "qureshi", "yahya", "hayi", "ahad", "orhan", "haq", "haseeb"] 

var ans = names.filter (function (val) {
    if (val.split("h").length < 2)return true;
})

console.log(ans);