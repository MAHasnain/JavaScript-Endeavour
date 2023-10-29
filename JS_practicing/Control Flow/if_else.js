// function cf () {
//     if (2 == 1) {
//         console.log("mah")
//     }
// }

// cf()


const temp = 20;

if (temp < 0) {
    console.log("freezing weather");
} else if (temp >= 0 && temp <= 10) {
    console.log("very cold weather");
} else if (temp >= 11 && temp <= 20) {
    console.log("cold weather");
} else if (temp >= 21 && temp <= 30) {
    console.log("normal temperature");
} else if (temp >= 31 && temp <= 40) {
    console.log("it's hot");
} else {
    console.log("it's very hot");    
}


const loggedInfromEmail = true;
const loggedInfromGoogle = false;
const loggedInfromFacebook = false;
const user = "hasnain";

if (loggedInfromEmail || loggedInfromGoogle || loggedInfromFacebook) {
    console.log(`${user} logged in`);
}else {
    console.log(`${user} not logged in`);
}


