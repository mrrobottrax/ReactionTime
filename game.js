const maxTime = 10;
const minTime = 1;

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
	console.log("Load");

	box = document.getElementById("box");
	button = document.getElementById("button");

	button.onclick = startGame;
}

function startGame()
{
	button.innerText = "PRESS";

	rand = Math.random() * maxTime + minTime;
}