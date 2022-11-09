import './styles.css';
import './index.html';

let diff
	, days
	, hours
	, minutes
	, seconds;

const grid = document.querySelector('.grid-container');
const inputDate = document.querySelector('input');

const setTimer = () => {

	const html = `
        <div class="timer">
        <h1>${days}</h1> 
        </div>
        <div class="timer">
        <h1>${hours}</h1>
        </div>
        <div class="timer">
        <h1>${minutes}</h1>
        </div>
        <div class="timer">
        <h1>${seconds}</h1>
        </div>
        <h1>Days</h1>
        <h1>Hours</h1>
        <h1>Minutes</h1>
        <h1>Seconds</h1>  
`;

	grid.innerHTML = html;
};

inputDate.addEventListener('change', (event) => {
	
	setInterval(() => {
		
		const now = new Date().getTime();
		const setTime = event.target.valueAsDate.getTime();
		diff = setTime - now;
		
		days = Math.floor(diff / (1000 * 60 * 60 * 24));
		hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((diff % (1000 * 60)) / 1000);
		
		setTimer();
	}, 1000);

	
	
});


