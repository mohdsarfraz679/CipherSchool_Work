var result = 0;
function reTy(value) {
  result = Object.prototype.toString.call(value);
  console.log(result);
}
reTy(1);
reTy("a");
reTy(true);
reTy([]);
reTy(null);
