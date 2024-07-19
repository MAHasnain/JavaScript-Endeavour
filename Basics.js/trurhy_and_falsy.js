// falsy values 

// false, 0, -0, BigInt ka 0n , "", null, NaN, undefined


// truthy values    (falsy vals k ilawa sub truthy values hoti hen )

// " ", "0", "false", function () {}


const userEmail = "mah@hasnain.com";

if (userEmail.length == 0) {
    console.log("user is logged in");
}else{
    console.log("user is'nt logged in");
}



console.log(false == 0);
console.log(false == "");
console.log(0 == "");




// Nullish Coalescing Operator ?? : null undefined  
//  (database se value null or undefined aany ki surat me use kiya jata h )

let val ;
val = undefined ?? "MAH";
console.log(val);

val = null ?? 427;
console.log(val);

val = 246 ?? 427;

console.log(val);


        // VS
// Turnary Operator

// condition ? true : false;