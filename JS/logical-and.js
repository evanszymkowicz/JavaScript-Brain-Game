var score1 = 8; //First round score (etc)
var score2 = 8;
var score3 = 6;
var score4 = 6;

var passBoth = (score1 >= pass1) && (score2 >= pass2);

var msg = 'Both rounds passed: ' + passBoth;

var el = document.getElementById('answer');
el.textContent = msg;
