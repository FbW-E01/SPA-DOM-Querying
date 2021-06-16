const body = document.querySelector("body");
body.style.fontFamily = 'Viaoda Libre';
body.style.margin = "0"

const categories = document.querySelectorAll(".category");
for (let i = 0; i < categories.length; i++) {
  const category = categories[i];
  category.style.color = "blue";
}

const allElementsOnPage = document.querySelectorAll("*");
allElementsOnPage.forEach(({style}) => style.margin = 0);



const warning = document.getElementById("warning");
warning.style.fontSize = "2.5rem";

