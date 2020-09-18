//Team Button constants
const teamOneButton = document.querySelector('#teamone-shoot-button');
const teamTwoButton = document.querySelector('#teamtwo-shoot-button');
const resetButton = document.querySelector('#reset-button');

// Grab the number from shots taken
var teamOneCount = document.querySelector('#teamone-numshots');
var teamTwoCount = document.querySelector('#teamtwo-numshots');
// Change the string to a number
var oneCount = Number(teamOneCount.innerHTML);
var twoCount = Number(teamTwoCount.innerHTML);
// Grab the number of goals
var teamOneGoal = document.querySelector('#teamone-numgoals');
var teamTwoGoal = document.querySelector('#teamtwo-numgoals');
// change the string to a number
var oneGoal = Number(teamOneGoal.innerHTML);
var twoGoal = Number(teamTwoGoal.innerHTML);
// Grab the number or resets
var resetCount = document.querySelector('#num-resets');
//change the string to a number
var resetCounter = Number(resetCount.innerHTML);

resetButton.addEventListener('click', function() {
	oneCount = 0;
	oneGoal = 0;
	twoCount = 0;
	twoGoal = 0;
	teamOneCount.innerHTML = oneCount;
	teamOneGoal.innerHTML = oneGoal;
	teamTwoCount.innerHTML = twoCount;
	teamTwoGoal.innerHTML = twoGoal;
	resetCounter = resetCounter + 1;
	resetCount.innerHTML = resetCounter;
})

teamOneButton.addEventListener('click', function() {
	oneCount = oneCount + 1;
	teamOneCount.innerHTML = oneCount;
	let num = getRandomInt();
	num > 5 ? oneGoal = oneGoal + 1 : oneGoal;
	teamOneGoal.innerHTML = oneGoal;
})

teamTwoButton.addEventListener('click', function() {
	twoCount = twoCount + 1;
	teamTwoCount.innerHTML = twoCount;
	let num = getRandomInt();
	num > 5 ? twoGoal = twoGoal + 1 : twoGoal;
	teamTwoGoal.innerHTML = twoGoal;
})

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(10) + 1);
}