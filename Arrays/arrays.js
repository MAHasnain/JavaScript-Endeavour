// Arrays 


// console.log(myMultipleElemsArr[2]);
// console.log(myMultipleElemsArr[5].name);
// console.log(myMultipleElemsArr[6].myAge);
// console.log(myArr.unshift(9))
// console.log(myArr.shift())
// console.log(myMultipleElemsArr.indexOf(true));
// console.log(myArr.join());
// console.log(myArr.join());


// const newArr = myArr.slice(2, 4);
// console.log("slice (immutable)")

// console.log(newArr);
// console.log("A", myArr);
let myArr = [1, 2, 3, 4, 5];
let myArr1 = [1, 7, 3, 9, 5];

// let myMultipleElemsArr = [0, 1, "2", true, 4, {name : "M.A.Hasnain"}, {myAge: 23, myId : 1234}];

const newArr2 = myArr.splice(1, 3);
console.log("splice (mutable) array ko maniulate kr deta h")

console.log("B: splice", newArr2);

/////  concat and spread operators /////////

const allArr = [...myArr, ...newArr2];
// console.log(allArr);


// flat 

const names = ["ali", [["hasnain"], "yunus"], "yahya", ["usman", "orhan", ["haq", "haseeb"]]];

const flatArr = names.flat(Infinity);

// console.log(Array.from("MAHasnain"));
// console.log(Array.from("MAHasnain").join());


// Array methods  (isArray, from, of)

// console.log(Array.from({names : "MAHasnain"}));
// console.log(Array.isArray(allArr));

console.log(Array.of(names));