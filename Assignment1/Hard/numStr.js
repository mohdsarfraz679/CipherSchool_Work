function numInStr(res) {
  var array = [];
  var k = 0;
  for (var i = 0; i < res.length; i++) {
    var count = 0;
    var temp = res[i];
    var temp1 = temp.split("");
    for (var j = 0; j < temp1.length; j++) {
      if (!isNaN(temp1[j]) && temp1[j] != " ") {
        count++;
      }
    }
    if (count > 0) {
      array[k] = temp1.join("");
      k++;
    }
  }
  console.log(array);
}

numInStr(["1a", "a", "2b", "b"]);
numInStr(["abc", "abc10"]);
numInStr(["abc", "ab10c", "a10bc", "bcd"]);
numInStr(["this is a test", "test1"]);
