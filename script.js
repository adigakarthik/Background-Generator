var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btnRandom = document.querySelector(".randomColor");

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


function randomNum(){
    return Math.floor(Math.random()*256);
}

function getRandomcolor(){
    var randomColor = "#" + componentToHex(randomNum()) + componentToHex(randomNum()) + componentToHex(randomNum());
    return randomColor;
}

function generateRandom(){
    color1.value = getRandomcolor();
    color2.value = getRandomcolor();  
    setGradient();
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btnRandom.addEventListener("click",generateRandom);