var pass = 50;
var score = 90;
var highScore1 = 75;
var highScore2 = 95;

var comparsion = (score1 + score2) > (highScore1 + highScore2);

var el = document.getElementById('answer');
el.textContent = 'New High Score: ' + comparison;
