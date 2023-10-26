// let meme = document.getElementById("memeImge");
// let title = document.getElementById("title");
// let button = document.getElementById("getMemeBtn");

// const URL = "https://ronreiter-meme-generator.p.rapidapi.com/meme";

// let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

// const getMeme = () => {
//   let randomSubreddit =
//     subreddits[Math.floor(Math.random() * subreddits.length)];

//   fetch(URL + randomSubreddit)
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log(data);
//       let memeImg = new Image();
//       memeImg.onload = () => {
//         meme.src = data.url;
//         title.innerHTML = data.title;
//       };
//     });
// };

// button.addEventListener("click", getMeme);
// window.addEventListener("load", getMeme);

let result = document.getElementById("result");
let searchbtn = document.getElementById("search-btn");

const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

let userInput = document.getElementById("user-inp").value;

fetch(URL + "big mac")
  .then((response) => response.json())
  .then((data) => {
    console.log("data :", data);
    let myMeal = data.meals[0];
    // console.log(myMeal);
    console.log(myMeal.strMealThumb);
    console.log(myMeal.strArea);
    console.log(myMeal.strMeal);
    console.log(myMeal.strInstructions);
    let count = 1;
    let ingredients = [];  
    for (let i in myMeal) {
      let ingredients = "";
      let measure = "";
      if (i.startsWith("strIngredients") && myMeal[i]) {
        ingredients = myMeal[i];
        measure = myMeal[`strMeasure` + count];
        count += 1;
        ingredients.push(`${measure} ${ingredients}`);
      }
    }
  });

console.log(ingredients);

result.innerHTML = `<img src=${myMeal.strMealThumb}>
  <div class="details">
    <h2>${myMeal.strMeal}</h2>
    <h4>${myMeal.strArea}</h4>
</div>
<div id="ingredient-con"></div>
<div id="recipe">
    <button id="hide-recipe">x</button>
    <pre id="instructions">
        ${myMeal.strInstructions}
    </pre>
</div>`;
