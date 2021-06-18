// Change the font of the body element. 
const body = document.body;
body.style.fontFamily = "Impact,Charcoal,sans-serif";
body.style.backgroundImage = "url(images/keith-misner-h0Vxgz5tyXA-unsplash.jpg)";
body.style.backgroundSize = "cover";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundAttachment = "fixed";
body.style.width = "80vw";
body.style.margin = "auto";
body.style.color = "white";

// * Center the text of h1 on the page.
const h1 = document.querySelector("h1");
h1.style.textAlign = "center";
h1.style.fontSize= "4em";

// * The menu headings have a class named `category`. Select the elements by class name. Then, change the `color` and `font-style` of each element.
const allLabels = document.querySelectorAll(".category");
allLabels.forEach(label => label.style.fontStyle = "italic");
allLabels.forEach(label => label.style.fontSize = "1.8em");
allLabels.forEach(label => label.style.color = "hot-pink");
allLabels.forEach(label => label.style.borderBottom = "solid 1px");


const allListItems = document.querySelectorAll("li");
allListItems.forEach(item => item.style.fontSize = "1em");
allListItems.forEach(item => item.style.margin = "1em");


// * Create a function named "_colorGenerator_" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of `food-category`. Give each list a different background color using the function that you created. 

const  colorGenerator = () => {
    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const randomRGB = () => randomNumber(0, 255);
    const randomTransparency = () => (randomRGB(50, 100) * 0.01).toFixed(2);    

    const colorRGBA = `rgba(${[randomRGB(), randomRGB(), randomRGB(), randomTransparency()].join(',')})`;
    return colorRGBA;
}


const allUl = document.querySelectorAll(".food-category");
allUl.forEach(item => item.style.backgroundColor = colorGenerator());
allUl.forEach(item => item.style.width = "300px");

// * Align the `food-category` lists in a row on desktop. Make sure that the page is responsive and also works on mobile.

const main = document.querySelector("main");
main.style.display = "flex";
main.style.flexDirection = "row";
main.style.justifyContent = "space-between";


// * Select the warning at the end of the page by its id `warning`. Select the id without using a querySelector. Change the size and font of the `warning`.
const warning = document.getElementById("warning");
warning.style.fontSize = "2em";
warning.style.textAlign = "center";

// * Select all _even_ `allergy-info` items. Give the even items a different background color.

const allergyInfo = document.querySelectorAll(".allergy-info");
allergyInfo.forEach(item => item.style.width = "300px");

for (let i = 1; i < allergyInfo.length; i += 2) {
    allergyInfo[i].style.backgroundColor = colorGenerator();
    
}
allergyInfo.forEach(item => item.style.margin = "0");
allergyInfo.forEach(item => item.style.listStyleType = "none");

// * Make the `allergy-warning` appear as a column in the center of the page.
const allergyWarning = document.querySelector(".allergy-warning");
allergyWarning.style.display = "flex";
allergyWarning.style.flexDirection = "column";
allergyWarning.style.alignItems = "center";
allergyWarning.style.marginBottom = "30px";


// * The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.

const footerElements = document.querySelectorAll(".food-desc");
footerElements.forEach(element => element.style.border = "5px solid white");
footerElements.forEach(element => element.style.borderRadius = "50%");
footerElements.forEach(element => element.style.width = "70px");
footerElements.forEach(element => element.style.height = "70px");
footerElements.forEach(element => element.style.textAlign = "center");
footerElements.forEach(element => element.style.padding = "40px");
footerElements.forEach(element => element.style.margin = "30px");
footerElements.forEach(element => element.style.backgroundColor = "orange");

const footer =document.querySelector(".footer");
footer.style.display = "flex";
footer.style.flexDirection = "row";
footer.style.justifyContent = "center";

