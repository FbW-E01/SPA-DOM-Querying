

document.body.margin = "0";
document.body.padding = "0";
document.body.boxSizing = "border-box";

// Change the font of the body element.
let global = document.querySelector("body");
global.style.fontFamily = "Arial";

// Center the text of h1 on the page.
let h1Centered = document.querySelector("h1");
h1Centered.style.textAlign = "center";

//..
let menuHeading = document.querySelectorAll(".category");
menuHeading.forEach((label) => {
  label.style.color = "peru";
  label.style.fontFamily = "verbana";
  label.style.fontSize = "1.5em";
});


//..
function colorGenerator() {
    return (
        "rgba(" +
        Math.ceil(Math.random() * 226) +
        "," +
        Math.ceil(Math.random() * 226) +
        "," +
        Math.ceil(Math.random() * 226) +
        "," +
        Math.random().toFixed(1) +
        ")"
    );
}

const bgColorUl = document.querySelectorAll(".food-category");
bgColorUl.forEach((ul) => (ul.style.backgroundColor = colorGenerator()));

//..

const mainFlex = document.querySelector(".main");

const foodCatFlex = document.querySelectorAll(".food-category");

function myMedia(x) {
    foodCatFlex.forEach((ul) => {
        if (x.matches) {
            mainFlex.style.display = "flex";
            mainFlex.style.gap = "2em";
            ul.style.flex = "1";
        }
    });
}

const x = window.matchMedia("(min-width: 700px");
myMedia(x);

//..

let warning = document.getElementById("warning");
warning.style.fontSize = "2em";
warning.style.fontFamily = "fira code";
warning.style.textAlign = "center";

//.. FIXME: MOBILE VERSION NOT FULL SCREEN

const evenChild = document.querySelectorAll(".allergy-info");
evenChild.forEach((li, i) =>
    i % 2 !== 0 ? (li.style.backgroundColor = "papayawhip") : null
);

//.. FIXME: MOBILE VERSION FULL SCREEN 

const allergySec = document.querySelector(".allergy-warning");
allergySec.style.width = "40vw";
allergySec.style.margin = "auto";

//.. FIXME: CIRCLES GET SQUASHED. NOT RESPONSIVE.

const footerCircle = document.querySelectorAll(".food-desc");

footerCircle.forEach((sec) => {
    sec.style.backgroundColor = null;
    sec.style.color = "mediumslateblue";
    sec.style.border = "5px green solid";
    sec.style.height = "100px";
    sec.style.width = "100px";
    sec.style.borderRadius = "100px";

    sec.style.display = "flex";
    sec.style.justifyContent = "center";
    sec.style.alignItems = "center";
});

const footer = document.querySelector(".footer");

footer.style.width = "50vw";
footer.style.display = "flex";
footer.style.justifyContent = "space-around";
footer.style.margin = "auto";
