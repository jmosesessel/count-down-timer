
// get the 
let display__time_left = document.querySelector(".display__time-left");
let display__end_time = document.querySelector(".display__end-time");
let countDown;

// Get the timer__button button click event
document.querySelectorAll('.timer__button').forEach(element=>{
    element.addEventListener('click', (event)=>{
        const timeInSec = event.target.getAttribute('data-time');

        //call timer function
        timer(timeInSec);       
    })
})

// A function that runs every second
const timer = (seconds) => {
	clearInterval(countDown);
	// Current time in milliseconds
	const now = Date.now();
	// Future time in milliseconds
	const future = now + seconds * 1000;

    // display countdown and return time
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

// display the count down timer
function displayCountDown(secondsLeft) {
	let minute = Math.floor(secondsLeft / 60);
	let seconds = secondsLeft % 60;
	let display = `${minute}:${seconds < 10 ? "0" : ""}${seconds}`;
	display__time_left.textContent = display;
}

// display the return time in --- futureTime in milliseconds
function displayReturnTime(futureTime) {
	let newDate = new Date(futureTime);
	let hours = newDate.getHours() % 12 == 0 ? 12 : newDate.getHours() % 12;
	let minute = newDate.getMinutes();
	let seconds = newDate.getSeconds();
	let display = `Be Back At ${hours}:${minute < 10 ? "0" : ""}${minute}:${seconds < 10 ? "0" : ""}${seconds}`;
	display__end_time.textContent = display;
}

// submit the form in minutes
document
	.querySelector(".submit__button")
	.addEventListener("click", function (event) {
		event.preventDefault();
        const enteredMins = document.getElementsByName('minutes')[0].value
        console.log('enteredMins',enteredMins)
        // take only numbers
        if(enteredMins == '' || isNaN(enteredMins)){
            alert('Enter time in minutes')
            enteredMins.value = ''
        }
        
        // convert the minutes to seconds
        const seconds = enteredMins * 60;

        // call the timer function and pass the seconds
        timer(seconds)
        
	});
