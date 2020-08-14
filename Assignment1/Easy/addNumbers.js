var num;
var count = 0;
function addNum(num) {
  for (var i = 1; i <= num; i++) {
    count = count + i;
  }

  console.log(count);
}

addNum(10);
count = 0;
addNum(40);
count = 0;
addNum(4);
