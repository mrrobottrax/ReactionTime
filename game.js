const maxTime = 10;
const minTime = 1;

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
	console.log("Load");

	box = document.getElementById("box");
	button = document.getElementById("button");
	statText = document.getElementById("status");

	start = new Audio('bip.ogg');
	change = new Audio('bop.ogg');
	press = new Audio('but.ogg');

	resetGame();
}

function resetGame() {
	statText.innerText = "Press start.";
	button.innerText = "START";

	button.onmousedown = startGame;

	box.style.backgroundColor = "red";

	if (typeof timeout !== 'undefined')
		clearTimeout(timeout);
}

function startGame() {
	statText.innerText = "Wait for the square to go green.";
	button.innerText = "PRESS";

	button.onmousedown = tooEarly;

	let wait = Math.random() * maxTime + minTime;

	timeout = setTimeout(startTimer, wait * 1000);

	start.play();
}

function startTimer() {
	box.style.backgroundColor = "green";

	button.onmousedown = stopTimer;

	timerStart = performance.now();

	change.play();
}

function stopTimer() {
	resetGame();

	let timeDelta = performance.now() - timerStart;
	statText.innerText = "Time: " + timeDelta.toString() + "ms";

	press.play();
}

function tooEarly() {
	resetGame();

	statText.innerText = "Too early.";

	press.play();
}