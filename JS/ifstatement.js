var score = 75;
var msg;

if (score >= 50) {
  msg = 'Congrats! You solved it!';
  msg +=' Proceed to the next round.';
}
var el = document.getElementById('answer');
el.textContent = msg;
