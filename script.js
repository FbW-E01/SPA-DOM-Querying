const targetBody = document.querySelector("body");
targetBody.style.fontFamily = "Impact,Charcoal,sans-serif";
targetBody.style.display = "flex";
targetBody.style.flexFlow = "row wrap";
targetBody.style.justifyContent = "space-around";
targetBody.style.boxSizing = "border-box";

const targetH1 = document.querySelector(".title");
targetH1.style.textAlign = "center";

const targetCategories = document.querySelectorAll(".category");
targetCategories.forEach((e) => {
  e.style.color = "darkblue";
  e.style.fontFamily = "Lucida Console, Courier, monospace";
});

const foodCategories = document.querySelectorAll(".food-category");
const foodRandom = Math.random();
foodCategories.forEach((e) => {
  function colorGenerator() {
    if (foodRandom < 0.25) {
      e.style.backgroundColor = "rgba(220,160,140,0.5)";
    } else if (foodRandom >= 0.25 && foodRandom < 0.5) {
      e.style.backgroundColor = "rgba(224,189,13,0.5";
    } else if (foodRandom >= 0.5 && foodRandom < 0.75) {
      e.style.backgroundColor = "rgba(224,189,42,0.5";
    } else {
      e.style.backgroundColor = "rgba(224,240,42,0.3)";
    }
  }
  colorGenerator();
});

const foodItems = document.querySelectorAll("li");
foodItems.forEach((e) => {
  e.style.display = "inline";
});

const changeAllergyWarnings = document.querySelector("#warning");
changeAllergyWarnings.style.color = "green";
changeAllergyWarnings.style.fontFamily = "Lucida Console,Courier New,monospace";
changeAllergyWarnings.style.fontSize = "26px";

const changerAllergyInfo = document.querySelectorAll(".allergy-info");
changerAllergyInfo.forEach((e, i) => {
  if (i % 2 === 1) {
    e.style.backgroundColor = "lightgreen";
    e.style.textAlign = "center";
    e.style.display = "block";
  }
});

const changerFooter = document.querySelectorAll(".food-desc");
changerFooter.forEach((e) => {
  e.style.border = "1px solid red";
  e.style.borderRadius = "15px";
  e.style.backgroundColor = "pink";
  e.style.textAlign = "center";
  e.style.display = "flex";
  e.style.flexFlow = "row wrap";
  e.style.boxSizing = "border-box";
});
