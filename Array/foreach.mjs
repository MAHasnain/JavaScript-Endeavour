// forEach is a higher order function (jis k andr 1 or function mendatory hota h)

let arr = [1, 3, 5, 7, 9];

arr.forEach(function (val) {
  console.log(val + 5);
});

arr.forEach(function (val) {
  console.log(`Hello ${val + 3}`);
});

arr.forEach(function (val) {
  if (val < 5) {
    console.log(val);
  }
});

console.log(arr);

// sum of all Elements =>
function sumOfAllElements() {
  let sum = 1;
  arr.forEach(function (val) {
    sum = sum + val;
  });
  console.log(sum);
}

sumOfAllElements();

// add all Numbers but skip the String

function onlyAddNums() {
  let newArr = [1, 2, 3, "5", 6, "9", 8];
  let sum = 0;
  newArr.forEach(function (val) {
    if (typeof val === "number") {
      sum = sum + val;
    }
  });
  console.log(sum);
}

onlyAddNums();


function pusha() {
  let arry = [];
  for (let i = 0; i < 20; i++) {
    arry.push(function () {
      setTimeout(function () {
        console.log(i);
      }, 1000);
    });
  }

  for (let i = 0; i < 20; i++) {
    arry[i]();
  }
}
pusha();
