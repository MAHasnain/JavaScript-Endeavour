// const randomColorGenerator = function () {
//     const hex = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += hex[Math.floor(Math.random() * 16)];
//     }

//     return color;
// }

// console.log(randomColorGenerator())

// let intervalId;
// const startChangingColor = function () {
//     const nonstopChangingColor = () => {
//         document.body.style.backgroundColor = randomColorGenerator();
//     }
//     if (! intervalId) {
//         intervalId = setInterval(nonstopChangingColor, 1000)
//     }
// };
// const stopChangingColor = function () {

//     clearInterval(intervalId);
//     intervalId = null;
// };


// document.querySelector('#start').addEventListener('click', startChangingColor);
// document.querySelector('#stop').addEventListener('click', stopChangingColor);


const randomColorGenerator = () => {
    let hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}


let intervalId;
const startChangeBgColor = function () {


    const changebackgroundColor = () => {

        document.body.style.backgroundColor = randomColorGenerator()

    }
    intervalId = setInterval(changebackgroundColor, 1000);
}

document.querySelector('#start').addEventListener('click', startChangeBgColor);

const stopChangeBgColor = () => {
    clearInterval(intervalId)
}
document.querySelector('#stop').addEventListener('click', stopChangeBgColor);