// var   :  function scoped hota h 


function abcd() {
  for (var i = 0; i < 5; i++) {
    console.log(i);    
  }

  console.log(i);
}

abcd()
// answer :  0 to 5 Numbers print hongy





// let    :  braces scoped hota h

function abcd2() {
  for (let i = 0; i < 5; i++) {
    console.log(i);    
  }

  console.log(i);
}

abcd2();

// answer :  for loop theek run hoga  and then error ayega (ReferenceError: i is not defined)



