// aisy functions jo normal values ya variables ki trha treat kiye ja ske those are called first class functions 


setTimeout(()=> {
    function abcd() {
        console.log("hello");
    }
    console.log(abcd());
}, 3000)


