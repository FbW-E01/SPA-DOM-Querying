// Change the font of the body element. 
const body = document.querySelector("body");
body.style.fontFamily = "Arial";
body.style.padding = "0.75rem";

//Center the text of h1 on the page.
const heading = document.querySelector(".title");
heading.style.textAlign = "center";

// The menu headings have a class named `category`. Select the elements by class name. Then, change the `color` and `font-style` of each element. 
const categories = document.querySelectorAll(".category");
categories.forEach(cat => cat.style.color = "purple");
categories.forEach(cat => cat.style.fontStyle = "italic");

// Create a function named "_colorGenerator_" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of `food-category`. Give each list a different background color using the function that you created. 
function _colorGenerator_ () {
    const colors = ["rgba(105, 181, 0.5)", "rgba(215, 69, 205, 0.75)", "rgba(224, 195, 50, 0.25)", "rgba(50, 50, 224, 0.6)"];
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
const foodCategories = document.querySelectorAll(".food-category");
foodCategories.forEach(foodCat => foodCat.style.color = _colorGenerator_());

// Align the `food-category` lists in a row on desktop. Make sure that the page is responsive and also works on mobile.
const main = document.querySelector("main");
main.style.display = "flex";
main.style.justifyContent = "center"

// Select the warning at the end of the page by its id `warning`. Select the id without using a querySelector. Change the size and font of the `warning`.
const warning = document.getElementById("warning");
warning.style.fontFamily = "Fantasy";
warning.style.textAlign = "center";
warning.style.color = "coral";

// Select all _even_ `allergy-info` items. Give the even items a different background color.
const allAllergyInfos = document.querySelectorAll(".allergy-info");
for (let i = 1; i < allAllergyInfos.length; i += 2) {
    allAllergyInfos[i].style.backgroundColor = _colorGenerator_();
}

// Make the `allergy-warning` appear as a column in the center of the page.
const allergyWarning = document.querySelector(".allergy-warning");
allergyWarning.style.display = "flex";
allergyWarning.style.justifyContent = "center";
allergyWarning.style.flexDirection = "column";

// The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.
const foodDesc = document.querySelectorAll(".food-desc");
foodDesc.forEach(foodD => foodD.style.border = "5px solid blue");
foodDesc.forEach(foodD => foodD.style.borderRadius = "15px");
foodDesc.forEach(foodD => foodD.style.padding = "10px");
const footer = document.querySelector("footer");
footer.style.display = "flex";
// found this here: https://blog.hellojs.org/re-create-css-flexbox-media-queries-with-javascript-c192e4e16a63
// doesn't work though
// let winWidth = $( window ).width();
// if (winWidth <= 411) {
//     footer.display.flexDirection = "column";
// } else if (winWidth > 411) {
//     footer.display.flexDirection = "row";
// }
footer.style.justifyContent = "space-around";
footer.style.marginTop = "1rem";

