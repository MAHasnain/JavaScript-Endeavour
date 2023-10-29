// Ques # 1  

// const str = "Muhammad Atta Ul Hasnain";

// const strrr = str.split(" ").map((word) => {
//     return word.split("").reverse().join("")
// })

// savedStr = strrr.join(" ")

// // console.log(strrr);
// console.log(savedStr);


const str = "Pakistan Zindabad paindabad";

const strArr = str.split(" ").map((word) => { return word.split().join("") })


const savedsttr = strArr.reverse().join(" ");

const savedStr = savedsttr.split(" ").map(function (word) {
    return word.split().reverse("")
})


console.log(savedStr.join(""))




// Ques # 2

// check Array and Object 


function checkArray(elem) {
    console.log( Array.isArray(elem))
}

checkArray({})
checkArray([])


// Ques # 3
// Array k Elements ko without pop 0 kiya jaskta h 

const arr = [1, 2, 4, 5, 6, 7, 8, 9, 3];

console.log(arr)

arr.length = 0;

console.log(arr)



// Ques # 4

const num = Number.isSafeInteger(123)

console.log("num", num);



// Ques # 5

// Array k Elements ko double krna

const array1 = [1, 4, 6, 8, 2, 3, 7, 9, 0];

console.log(array1.join())