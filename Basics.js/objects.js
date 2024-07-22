//  Object singleton
// Object.create


//  Object literal

let hasnain = {
 firstName:"mAtta",
 lastName: "hasnain",
 fatherName: "MAzamKhan",
 number: 923363237543,
 getfullName: function() {
  console.log(this.firstName + " " + this.lastName);
 }
}

console.log(hasnain);


// Object.freeze(hasnain); 

// Add
hasnain.number = 46546;
hasnain.firstName = "MAH";
hasnain.fatherName = "khan"

console.log(hasnain);

