const remDupli = (res) => {
  var uniqueArray = [];

  for (var i = 0; i < res.length; i++) {
    if (uniqueArray.indexOf(res[i]) === -1) {
      uniqueArray.push(res[i]);
    }
  }
  console.log(uniqueArray);
};
remDupli([1, 0, 1, 0]);
remDupli(["The", "big", "cat"]);
remDupli(["John", "Taylor", "John"]);
