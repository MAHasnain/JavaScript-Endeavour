// falsy values

// 0, "", BigInt 0n, null, undefined, NaN, false, -0

// truthy values 

/// "0", "false", "0n", " " 



const Arr = [];

if (Arr.length === 0) {
    console.log("array is empty.")
}

const emptyObj = {
    a: 1
};

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty.")
} else {
    console.log("object is not empty.")
}



false

true
console.log(0 == "");
console.log(0 == " ");
console.log(false == null);