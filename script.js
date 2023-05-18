// Get the button click event

const countdownBtn = (e) => {
	const timeInSec = e.dataset.time;
	console.log(e.dataset.time);
	timer(timeInSec);
};

let display__time_left = document.querySelector(".display__time-left");
let display__end_time = document.querySelector(".display__end-time");
let countDown;
// A function that runs every second
const timer = (seconds) => {
	clearInterval(countDown);
	// Current time in milliseconds
	const now = Date.now();
	// Future time in milliseconds
	const future = now + seconds * 1000;

    displayCountDown(seconds);
	displayReturnTime(future);
	countDown = setInterval(() => {
		let secondsLeft = Math.round((future - Date.now()) / 1000);
		if (secondsLeft < 0) {
			clearInterval(countDown);
			return;
		}

		displayCountDown(Math.abs(secondsLeft));
	}, 1000);
};

function displayCountDown(secondsLeft) {
	let minute = Math.floor(secondsLeft / 60);
	let seconds = secondsLeft % 60;
	let display = `${minute}:${seconds < 10 ? "0" : ""}${seconds}`;
	display__time_left.textContent = display;
}

// display the return time in --- futureTime in milliseconds
function displayReturnTime(futureTime) {
    let newDate = new Date(futureTime)
	let hours = newDate.getHours() % 12;
	let minute = newDate.getMinutes();
	let seconds = newDate.getSeconds();
	let display = `Be Back At ${hours}:${minute < 10 ? "0" : ""}${minute}`;
	display__end_time.textContent = display;
}
