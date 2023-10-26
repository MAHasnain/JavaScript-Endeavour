// ik function dusry function ko return kry or returned function apne argument or parent function k argument ki value ko use kry issi concept ko currying kaha jata h 
//                                                 OR 
// ik function ko series of functions me breakdown krna currying kehlata h

function calc(a, b) {
    console.log(23+40)
}

calc()   



   
function parent(a) {
    return function (b) {
        return a + b;
    }
}

let ans = parent(23);
let ans2 = ans(40);

console.log(ans2)

