function hitJack(para) {
  if ((para.map((p) => p === para[0]).filter((a) => a).length = 4)) {
    var result = "true";
  }
  if (para.map((p) => p === para[0]).filter((a) => a).length != 4) {
    var result = "false";
  }
  console.log(result);
}

hitJack(["a", "a", "aa", "a"]);
hitJack(["ss", "ss", "ss", "ss"]);
