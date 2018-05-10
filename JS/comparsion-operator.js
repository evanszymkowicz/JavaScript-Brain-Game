var pass = 50; //The necessary user score to pass the test
var score = 90; // Hard-coded user score

// Check if the user has passed

var hasPassed = score >= pass;

// Flash answer that changes live with score

var el = document.getElementById('answer');
el.textContent = 'Level passed: ' + hasPassed;
