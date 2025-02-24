const maxTime = 10;
const minTime = 1;

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
	console.log("Load");

	box = document.getElementById("box");
	button = document.getElementById("button");
	statText = document.getElementById("status");

	resetGame();
}

function resetGame() {
	statText.innerText = "Press start.";
	button.innerText = "START";

	button.onclick = startGame;

	box.style.backgroundColor = "red";

	if (typeof timeout !== 'undefined')
		clearTimeout(timeout);
}

function startGame() {
	statText.innerText = "Wait for the square to go green.";
	button.innerText = "PRESS";

	button.onclick = tooEarly;

	let wait = Math.random() * maxTime + minTime;

	timeout = setTimeout(startTimer, wait * 1000);
}

function startTimer() {
	box.style.backgroundColor = "green";

	button.onclick = stopTimer;

	timerStart = performance.now();
}

function stopTimer() {
	resetGame();

	let timeDelta = performance.now() - timerStart;
	statText.innerText = "Time: " + timeDelta.toString() + "ms";
}

function tooEarly() {
	resetGame();

	statText.innerText = "Too early.";
}