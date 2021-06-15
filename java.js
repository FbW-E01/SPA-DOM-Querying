let body= document.querySelector("body")
let h1= document.querySelector("h1")
let categorys = document.querySelectorAll(".category")
let foods = document.querySelectorAll(".food-category")
let main = document.querySelector("main")
let warning= document.getElementById("warning")
let infos= document.querySelectorAll(".allergy-info")
let allergyCollum = document.querySelector(".allergy-warning")
let discription = document.querySelectorAll(".food-desc")
let footer = document.querySelector("footer")
let footerH3 = document.querySelectorAll("h3")

body.style.fontFamily ="Monospace"
body.style.border="3px solid purple"
body.style.display="flex"
body.style.flexDirection="column"

h1.style.textAlign="center"

main.style.display="flex"
main.style.flexDirection="column"
main.style.alignItems="center"


warning.style.textAlign="center"
warning.style.fontFamily="Comic Sans MS"
warning.style.fontSize="40px"

allergyCollum.style.width="60%"
allergyCollum.style.margin="auto"


let infoColor="rgba("+colorGenerator()+")"
for(i=0;i<infos.length;i+=2){
    infos[i].style.backgroundColor= infoColor
}

categorys.forEach(item=>{
    item.style.color="blue"
    item.style.fontStyle="italic"
    item.style.fontSize="30px"
})

foods.forEach(item=>{
    item.style.backgroundColor= "rgba("+colorGenerator()+")"
    item.style.width="20%"
    item.style.height="100px"
    item.style.padding="50px"
    item.style.textAlign="center"
})

discription.forEach(item=>{
    item.style.width="200px"
    item.style.height="200px"
    item.style.border="3px solid red"
    item.style.borderRadius="50%" 
    item.style.display="flex"
    item.style.justifyContent="center"
    item.style.alignItems="center"
    item.style.marginTop="20px"
})
footerH3.forEach(item=>{
    item.style.fontSize="20px"
})

footer.style.display ="flex"
footer.style.flexDirection="column"
footer.style.margin="auto"
sizeCheck()
function sizeCheck(){
    if(window.innerWidth > 700){
        main.style.flexDirection="row"
        main.style.justifyContent="space-around"

        footer.style.flexDirection="row"
        footer.style.justifyContent="space-around"
        
    }else{
        main.style.flexDirection="column"
        footer.style.flexDirection="column"
    }
   
}
// var t=setInterval(sizeCheck(),10);
// window.onresize('resize', sizeCheck);
window.addEventListener('resize', sizeCheck);

function colorGenerator(){
    let randomColor= Math.ceil(Math.random()*255)+" ,"+Math.ceil(Math.random()*255)+" ,"+Math.ceil(Math.random()*255)+" ,"+ Math.random()
    return randomColor
}
