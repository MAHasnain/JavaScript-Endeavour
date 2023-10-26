var carName = {
    name1: "audi",
    name2: "A4",
    number: 3632375,
    getfullName: function() {
        console.log(this.name1 + this.name2);
    }
}

console.log(carName.getfullName());


var boy = {
    firstName: "atta",
    lastName: "hasnain",
    age: 42,
    getfullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

console.log(boy.getfullName());
