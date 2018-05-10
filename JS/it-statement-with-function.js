var score = 75;
var msg = '';

function congradulate() {
  msg += 'Congrats! ';
}

if (score >= 50) {
  msg += 'Proceed to the next round.';
}

var el = document.getElementById('answer');
el.innerHTML = msg;
