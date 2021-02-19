


var begin = +prompt("시작값 정수를 입력하세요.")
var end = +prompt("끝값 정수를 입력하세요.");

var total = 0;
var n = begin;

while(n <= end){
    total += n;
    n ++;
}
alert(`${begin}번째부터 ${end}번째까지의 합은 ${total}`);

