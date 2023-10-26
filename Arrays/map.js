// Array k hr member pr koi operation perform krne or result me milny wali value ko new Array me add krne k liye map ka use kiya jata h
// => [1, 2, 3, 4, 5]
// => [2, 4, 6, 8, 10]

// let arr = [1, 3, 4, 5, 6];

// let newArr = arr.map(function (val) {
//     return 3
// })

// console.log(newArr);

// let arr = [
//   "apple",
//   "banana",
//   "WaterMelon",
//   "papaya",
//   "sharifa",
//   "kharbooza",
//   "pineapple",
//   "grapes",
//   "khajoor",
// ];

// let ans = arr.map(function (val) {
//   if (val.length == 6) {
//     let mah = val;
//     console.log(mah);
//   } else {
//     let mah2 = val;
//     console.log(mah2)
//   }
// });

// console.log(ans);

var arr = [
  { name: "hasmah", age: 345 },
  { name: "mahas", age: 45 },
  { name: "mah", age: 34 },
];

let ans = arr.map(function (val) {
  return {name : val.name}
})

console.log(ans)