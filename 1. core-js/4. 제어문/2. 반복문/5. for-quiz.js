
var total = 0;

var x = 2;
var y = 1;


for(y = 1; y <= 9; y++){
    total = x * y;
    console.log(`${x} X ${y} = ${total}`);
    
}
console.log("=================================");

//랜덤 구구단

var total = 0;
var x = Math.floor(Math.random() * (8)) + 2;
var y = 1;

for(y = 1; y <=9; y++){
    total = x * y;
    console.log(`${x} X ${y} = ${total}`);
}