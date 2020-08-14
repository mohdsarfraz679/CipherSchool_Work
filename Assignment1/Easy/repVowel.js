function repVowe(str) {
  var str1 = str.split("");
  for (var t = 0; t < str1.length; t++) {
    if (str1[t] == "a") {
      str1[t] = "1";
    }
    if (str1[t] == "e") {
      str1[t] = "2";
    }
    if (str1[t] == "i") {
      str1[t] = "3";
    }
    if (str1[t] == "o") {
      str1[t] = "4";
    }
    if (str1[t] == "u") {
      str1[t] = "5";
    }
  }

  var str2 = str1.join("");
  console.log(str2);
}

repVowe("rumman");
