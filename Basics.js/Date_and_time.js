// Dates

const myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toUTCString());

// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);


// const createdDate = new Date(2024, 6, 10);
// console.log(createdDate.toLocaleDateString());
// console.log(createdDate.toDateString());

// const createdDateAndTime = new Date(2024, 6, 10, 3, 45);
const createdDateAndTime = new Date('04-23-2001');

// console.log(createdDateAndTime.toLocaleString());
// console.log(createdDateAndTime.toLocaleTimeString());

const newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getTime());
// console.log(newDate.getUTCDate());

console.log(newDate.toLocaleString('default', {
    month : 'long',
    day : '2-digit',
    year : 'numeric'
}))
