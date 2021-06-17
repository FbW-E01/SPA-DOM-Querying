const body = document.querySelector("body");
body.style.fontFamily = "Arial"
body.style.textAlign = "centre";

console.log(body.style)

const title = document.querySelector("h1")
title.style.textAlign = "center";
console.log(title.style)

const category = document.querySelectorAll(".category")
category.forEach(e => {
    e.style.color = "red";
    e.style.fontStyle = "italic"
})

let colorGenerator = () =>
    `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},${Math.random()})`;


let foodCategory = document.querySelectorAll("ul.food-category")

foodCategory.forEach(element => {
    element.style.backgroundColor = colorGenerator()
    // element.style.margin = "20px"
    element.style.fontSize = "1.5rem"
    element.style.paddingRight = "20px"

    element.style.width = "28vw"

});

let main = document.querySelector(".main")
main.style.display = "flex"
main.style.flexWrap = "wrap"
main.style.justifyContent = "space-around"

let warning = document.getElementById("warning")
warning.style.fontFamily = "times-roman"
warning.style.fontSize = "2rem"
warning.style.textAlign ="center"


let allergyInfo = document.querySelectorAll(".allergy-info")

// allergyInfo.style.backgroundColor = "red"

allergyInfo.forEach((element, index) => {

    if (index % 2 === 1) {
        element.style.backgroundColor = "blue"
    }
    element.style.width = "200px"
    element.style.listStyleType = "none"
    element.style.margin = "0 auto"
});



let footer = document.querySelector(".footer")
footer.style.display = "flex"
footer.style.flexWrap = "wrap"



footer.style.justifyContent = "space-around"

let food = document.querySelectorAll(".food-desc")
food.forEach((x) => {
    x.style.border = "5px yellow solid"
    x.style.borderRadius = "50%"
    x.style.width = "200px"
    x.style.height = "140px"
    x.style.display = "flex";

    x.style.justifyContent = "center";
    x.style.textAlign = "center"
    x.style.paddingTop = "60px"







})








