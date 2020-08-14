var str;
var char;
var count = 0;

function chaCou(str, char) {
  for (var i = 0; i < str.length; i++) {
    if (char === str[i]) count++;
  }
  console.log(count);
}

chaCou("mumma", "m");
count = 0;
chaCou("assignment", "n");
count = 0;
chaCou("independance day", "d");
