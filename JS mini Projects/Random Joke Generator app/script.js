// import Axios from "axios";

// // const axios = require("axios");

// const getJoke = async () => {
//   console.log();
//   const options = {
//     method: "GET",
//     url: "https://world-of-jokes1.p.rapidapi.com/v1/jokes",
//     headers: {
//       "X-RapidAPI-Key": "dd382e2445mshfcc998614f4cf5bp1cbad7jsn6609d84781ae",
//       "X-RapidAPI-Host": "world-of-jokes1.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await Axios(options);
//     // console.log(response.data);
//     console.log(response.data)
//   } catch (error) {
//     console.error(error);
//   }
// };
// getJoke();

const jokeContainer = document.getElementById("joke");
const button = document.getElementById("btn");

const URL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(URL)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    });
};

button.addEventListener("click", getJoke);
getJoke();
