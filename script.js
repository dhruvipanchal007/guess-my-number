// console.log('hello');

// document.querySelector('.number').textContent = 13;
// document.querySelector('guess-score').value = 23;
// console.log(document.querySelector('.guess-score').value);

// document.querySelector('.number').textContent = secretnumber;
let secretnumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess-score').value);
	console.log(typeof guess);

	if (guess === 0) {
		document.querySelector('.message').textContent = 'No Number';
	} else if (guess === secretnumber) {
		document.querySelector('.message').textContent = 'correct number';
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').textContent = secretnumber;

		if (score > highscore) {
			highscore = score;
			document.querySelector('.high-score').textContent = highscore;
		}
	} else if (guess > secretnumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = 'Too high';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = 'You Lost The Game';
			document.querySelector('.score').textContent = 0;
		}
	} else if (guess < secretnumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = 'Too Low';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = 'You Lost  the Game';
			document.querySelector('.score').textContent = 0;
		}
	}
});
document.querySelector('.again').addEventListener('click', function () {
	secretnumber = Math.floor(Math.random() * 20 + 1);
	score = 20;

	document.querySelector('.number').textContent = '?';
	document.querySelector('.message').textContent = 'Start Guessing..';
	document.querySelector('.score').textContent = score;
	document.querySelector('.guess-score').value = '';
	document.querySelector('body').style.backgroundColor = '#222';
});
