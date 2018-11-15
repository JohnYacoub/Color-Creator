var css    = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body   = document.getElementById("gradient")
var button = document.querySelector("button");


function setGradient() {
	body.style.background = "linear-gradient(to right, "
	 + color1.value
	 + ", "
	 + color2.value + ")";

	 css.textContent = body.style.background + ";";
}

function getRandomColor(){


	var letters = "0123456789ABCDEF";
	var color = '#';
	var color3 = "#";
	for (var i =0; i <6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
		color3 +=letters[Math.floor(Math.random() * 16)]	
	}
        css.textContent = body.style.background;
	return body.style.background = "linear-gradient(to right, "
	 + color
	 + ", "
	 + color3 + ")";

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", getRandomColor);
