let obj = {};  // blank object
console.log(obj);


let Me = {
    name: "MAHasnain",
    age: 22,
    jaahilhai: false
}
console.log(Me);

delete Me.jaahilhai;

console.log(Me);











Object.freeze()  // can't change and update and even never delete this object

let car = {
    name: "Audi",
    model: "A6",
    price: "23000 $"
}


car.price = 320000
delete car.model;
console.log(car);

Object.freeze(car);


// delete car.name;
// car.price = 320000


