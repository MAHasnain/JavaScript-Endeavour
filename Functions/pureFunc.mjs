// Pure function
// aisa function jo argument me di hui same value pr same output return krta h
// or jo global variable ki value ko change nhi krta 
// PURE FUNCTION kehlata h



var gloVar = 20;
function pure(a) {
    console.log(a + 20)
}    
pure(10);



function impure() {
    console.log(gloVar)
    console.log(gloVar ++);
    console.log(gloVar)
}
impure();


function impure2(a) {
    console.log(Math.random() * a)
}

impure2(23);
impure2(23);
impure2(23);
impure2(23);
