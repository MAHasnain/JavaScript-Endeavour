///  Constructor Functions 
//  Wo normal functions jis me keyword "this" ka use kiya jaye or func ko call krte wqt keyword "new" ka use kiya jae

// Usecase :->  jahan 1 jessi properties wali boht sary elements ki need ho wahan pr construtor function ka use kiya jata h 


// function Songs(title) {             ///  but jo value same nhi h us ko parameter me dal dengy or body me this laga kr call kr dengy  
//     this.title = title;                                
//     this.writer = "Khalil ur rahman";
//     this.singerName = "Rahet Fateh Ali";
//     this.lyrics = false;
// }

// const song1 = new Songs("mere pas tum ho");
// const song2 = new Songs("Dard ho dil me to dawa kijiye");
// const song3 = new Songs("Tediyan Akhiyan Sohniyan");
// const song4 = new Songs("tu kiya jany");

// // const RahetFatehAlisongs = [song1, song2, song3, song4]

// // console.log(RahetFatehAlisongs);
// console.log(song1, song2, song3, song4);


// function PunjabiSongs(title, lyrics, writer, singerName) {
//     this.writer = writer;
//     this.singerName = singerName;
//     this.title = title;
//     this.lyrics = lyrics;
// }

// const song1 = new PunjabiSongs("Mainu Nai Pehchaandi", true, "Devilo", "Jerry");
// const song2 = new PunjabiSongs("Kabootariyan", false, "khalil ur rahman", "rahat fateh ali");

// console.log(song2);


function Cars(color, model, manufacturer) {
    this.color = color;
    this.model = model;
    this.manufacturer = manufacturer;
}

const bmw = new Cars("navy Blue", "bmwB3", "Bayerische Motoren Werke AG");
const audi = new Cars("white", "audiA6", "the Volkswagen Group");

console.log(bmw, audi);