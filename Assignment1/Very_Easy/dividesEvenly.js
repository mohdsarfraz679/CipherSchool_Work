var x;
var y;
function dividesEvenly(x, y) {
  if (x % y === 0 && x >= y) console.log(true);
  else console.log(false);
}

dividesEvenly(68, 9);
dividesEvenly(54, 9);
dividesEvenly(4, 8);
dividesEvenly(6, 6);
