let title = document.getElementById('title');

let Quryslctr = document.querySelector('h1');

// console.log(Quryslctr);
// console.log(title);

Quryslctr.style.backgroundColor = "red";

title.style.backgroundColor = "yellow"; 
title.style.color = "black"; 
title.style.padding = "5px"
title.innerText = "MAH"; 


const parentDiv = document.querySelector('.parent');
// console.log(parentDiv);
// console.log(parentDiv.children);
// console.log(parentDiv.children[0].innerHTML);
// console.log(parentDiv.children[1].innerHTML);
// console.log(parentDiv.children[2].innerHTML);
// // console.log(parentDiv.children[3].innerText = "sunday");
// console.log(parentDiv.children[3].innerText = "saturday"); 

// console.log(parentDiv.children[0].style.color = "green"); 

// console.log(parentDiv.firstElementChild);
// console.log(parentDiv.lastElementChild); 

// const dayOne = document.querySelector('.day')

// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);



const div = document.createElement('div')
div.className = "main";
div.id = 123;
div.style.color = "yellow";
div.style.backgroundColor = "red";
div.style.padding = "50px"
div.innerText = "M.A.H";                            /// way 1
const addText = document.createTextNode("M.A.H");   /// way 2
div.appendChild(addText);

document.body.appendChild(div);

console.log(div);

