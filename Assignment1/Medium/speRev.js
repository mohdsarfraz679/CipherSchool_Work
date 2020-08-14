var s1;
var s2;
function speRev(s1, s2) {
  var x = s1.split(" ");
  var y = x.length;
  for (var i = 0; i < y; i++) {
    if (x[i][0] === s2) {
      var result = x[i].split("").reverse();
      x[i] = result.join("");
    }
  }

  console.log(x.join(" "));
}

speRev("stars", "s");
speRev("first man to walk on the moon", "m");
