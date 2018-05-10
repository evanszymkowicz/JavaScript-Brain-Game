var msg;
var level = 2;

switch (level) {
case 1:
  msg = 'Good luck!';
  break;

case 2:
  msg = 'Second of three trys. Keep going';
  break;

case 3:
  msg = 'Final try. Almost done.';
  break;

default:
  msg = 'Good luck.';
  break;
}

var el = document.getElementById('answer');
el.textContent = msg;
