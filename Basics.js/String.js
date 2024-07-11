// String  and methods 

// String length
// String charAt()
// String charCodeAt()
// String at()
// String [ ]
// String slice()
// String substring()
// String substr()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String repeat()
// String replace()
// String replaceAll()
// String split()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               



let myName = "MAHasnain";
let age = 23;

console.log(`I'm ${myName.toUpperCase() } and I'm ${age} years old.`);

console.log(myName.__proto__);

console.log(myName.charAt(2));
console.log(myName.toString());
console.log(myName.length);
console.log(`indexof = ${myName.indexOf('')}`);


const newString = myName.substring(0, 7)
console.log(newString);

const otherString = myName.slice(-8, 3)
console.log(otherString);




const trim = "  check space    ";
console.log(trim);
console.log(trim.trim());


const url = "https://MAHasnain%20mah.com";
console.log(url.replace('%20', '-'));


const url2 = "https://M%20A%20Hasnain.com";
console.log(url2.replace('%20', '-'));

console.log(url2.includes('Hasnain'));

