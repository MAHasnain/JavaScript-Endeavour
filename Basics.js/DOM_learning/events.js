// BUBBLING Event

// what is Event BUBBLING 
// kisi bhi Element pr event listen krny se us k parent element pr bhi event listen hoga 

// event.stopPropagation() rokny k liye lagya jata h


document.querySelector('container').removeEventListener('click', function (e) {
    console.log(`removed`);
});



// document.getElementById('container').addEventListener('click', function (e) {
//     console.log("div clicked");
// });

// document.getElementById('img').addEventListener('click', function (e) {
//     console.log("flowers clicked");
// });


// CAPTURING Events


document.getElementById('container').addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("div clicked");
}, true);


document.getElementById('img').addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    console.log("flowers clicked");
}, true);



