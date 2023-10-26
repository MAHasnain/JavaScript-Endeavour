// Immediately Invoked Function Expression

// create hoty hi call kiya jany wala function Immediately Invoked function Expression kehlata h
// why are we making it at first place ????

// for create private variables

// (function () {})();

// (function () {
//     console.log("hello")
// })();

// let ans = (function () {
//   let mah = 2345;
//   return {
//     getter: function () {
//       console.log(mah);
//     },
//     setter: function (param) {
//         mah = param;
//     },
//   };
// })();

// ans.getter();
// ans.setter(23452345);

// LOCAL VS GLOBAL

// koi bhi variable jo kisi block of code (ya brakets) me nhi h that's called GLOBAL VARIABLE
// jb k kisi bhi braket me mojud variable ko local variable kaha jata h

let ans = (function () {
  var privateVariable = 29854;

  return {
    getter: function () {
      console.log(privateVariable);
    },
    setter: function (param) {
      privateVariable = param;
    },
  };
})();

ans.setter("mahasnain");
ans.getter();











let aswr = (function () {
  var prvVar = "M.A.H";
  return {
    getter: function () {
      console.log(prvVar);
    },
    setter: function (params) {
      prvVar = params;
    },
  };
})();

aswr.setter(2394);
aswr.getter();