/*function person (email, firstName, lastName) {
 this.email = email,
 this.firstName = firstName,
 this.lastName = lastName
 this.getfullName = function () {
  console.log(this.firstName + " " + this.lastName);
 }
}
var person1 = new person ("atta@gmail.com", "atta", "is now login");
console.log(person1.getfullName());


function person (name, number, profession) {
 this.name = name,
 this.number = number, 
 this.profession = profession,
 this.changeNumber = function () {
  console.log(this.number + this.name);
 }
}

var brother = new person ("saqlain", 56498, "job");
console.log(brother.changeNumber());
*/

function freinds (name, college, feculty) {
 this.name = name,
 this.college = college,
 this.feculty = feculty,
 this.fecultychange = function () {
  console.log(this.college + " " + this.feculty);
 }
}
var freind1 = new freinds ("usama", "scienceClg", "medical");
console.log(freind1.fecultychange());
