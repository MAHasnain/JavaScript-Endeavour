/*
function toyota (car1, car2, car3, car4) {
 var carNames = {
  car1: car1,
  car2: car2,
  car3: car3,
  car4: car4,
  groupOfCars: function () {
   console.log(this.car1 + " " + this.car3);
  }
 }
 return carNames;
}

var carNames1 = toyota("corolla", "hilux", "yaris", "camry");
var carNames2 = toyota("Prius", "Avalon", "Sienna", "C-HR");

console.log(carNames1.groupOfCars());
console.log(carNames2.groupOfCars());


function Student(firstName, lastName) {
 this.firstName = firstName,
 this.lastName = lastName,
 this.getfullname = function() {
  console.log(this.firstName + this.lastName);
 }
}

var student1 = new student("atta.", "hasnain");
console.log(student1.getfullname());




function user (name, email) {
 this.email = email,
 this.name = name,
 this.login = function() {
  console.log(this.email + " " + this.name);
 }
}
user.prototype.logout = function () {
 console.log(this.email, "is now logged out")
}


var userone = new user ("user is now log in", "hasnain@gmail.com");
console.log(userone.logout());

function Carscompany (nissan, toyota, honda) {
 this.nissan = nissan,
 this.toyota = toyota,
 this.honda = honda,
 this.newcar = function () {
  console.log(this.honda + this.toyota);
 }
}
var car1 = new Carscompany ("morganite", "prado", "civic");
var car2 = new Carscompany ("vezel", "grande" ,"BR V")

console.log(car1);
console.log(car2.newcar())



function Car (speed, cluch, accelarator) {
 this.speed = speed,
 this.cluch = cluch,
 this.accelarator = accelarator,
 this.forStopCar = function () {
  console.log(this.speed + " " + this.cluch);
 }
}

Car.prototype.forFastCar = function () {
 console.log(this.cluch + " " + this.accelarator);
}

var carfunctions1 = new Car (0, 100, 100);
var carfunctions2 = new Car (100, 0, 100);

console.log(carfunctions1.forFastCar());
console.log(carfunctions1.forStopCar());
console.log(carfunctions1);
console.log(carfunctions2.forFastCar());

function Globe (asia, africa, yourupe, antarctica) {
 this.asia = asia, 
 this.africa = africa,
 this.yourupe = yourupe,
 this.antarctica = antarctica,
 this.newContinent = function() {
  console.log(this.asia + this.antarctica);
 }
}

var continent1 = new Globe ("pakistan", "africa", "russia", "antarctica");
var continentchange = new Globe ("saudia", "srilanka", "germany", "antarctica");

console.log(continent1);
console.log(continent1.antarctica);
console.log(continentchange.newContinent());
console.log(continentchange);

function Person (firstName, lastName, number) {
 this.firstName = firstName,
 this.lastName = lastName,
 this.number = number,
 this.rollNumber = function() {
  console.log(this.firstName + this.number);
 }
}
var person1 = new Person ("rl", "hasnain", 022);
console.log(person1);


function User (firstName, lastName, gmail) {
 this.firstName = firstName,
 this.lastName = lastName,  
 this.gmail = gmail,
 this.number = function() {
  console.log(this.firstName + "." + this.gmail);
 }
}

var userdata = new User("atta", "hasnain", "atta@gmmail.com");
console.log(userdata.number());
*/

function Car (breaks, oil, engine) {
 this.break = breaks,
 this.oil = oil,
 this.engine = engine,
 this.stopthecar = function () {
  console.log(breaks + " " + engine);
 }
}

var car1 = new Car ("full100", "shell", "andEnginePowerOff");
console.log(car1.stopthecar());