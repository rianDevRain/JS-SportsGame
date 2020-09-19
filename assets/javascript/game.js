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

// Reset the all the counters and increase reset by 1
resetButton.addEventListener('click', function() {
	resetCounter = resetCounter + 1;
    resetCount.innerHTML = resetCounter;
    resetCounters();
})

// increase team one by one
// used getRandomInt() function I created below
// if num is greater then 5 the goal counter will increase
// if not the goal counter will stay the same
teamOneButton.addEventListener('click', function() {
	oneCount = oneCount + 1;
	teamOneCount.innerHTML = oneCount;
	let num = getRandomInt();
	num > 5 ? oneGoal = oneGoal + 1 : oneGoal;
	teamOneGoal.innerHTML = oneGoal;
})

// increase team two by one
// used getRandomInt() function I created below
// if num is greater then 5 the counter will increase
// if not the goal counter will stay the same
teamTwoButton.addEventListener('click', function() {
	twoCount = twoCount + 1;
	teamTwoCount.innerHTML = twoCount;
	let num = getRandomInt();
	num > 5 ? twoGoal = twoGoal + 1 : twoGoal;
	teamTwoGoal.innerHTML = twoGoal;
})



// reset all counters in memory and on the page
function resetCounters() {
	oneCount = 0;
	oneGoal = 0;
	twoCount = 0;
	twoGoal = 0;
	teamOneCount.innerHTML = oneCount;
	teamOneGoal.innerHTML = oneGoal;
	teamTwoCount.innerHTML = twoCount;
	teamTwoGoal.innerHTML = twoGoal;
}

// Generate a random number betweeen 1 - 10
function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(10) + 1);
}