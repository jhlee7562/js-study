//2단 반복문
// var floor = 2;

// for (var line = 1; line <= 9; line ++) {
//     console.log(`${floor} X ${line} = ${floor*line}`);
// }
// console.log("============================");


// 중첩 반복문
// for (var floor = 2; floor <= 9; floor++){
//     for (var line = 1; line <= 9; line ++) {
//         console.log(`${floor} X ${line} = ${floor*line}`);
//     }
//     console.log("============================");
// }

var num = 1;
for(var i = 0; i < 5; i++){
    for(var j = 0; j < 3; j++){
        for(var k = 0; k < 2; k++){
        console.log("안녕" + num);
        num ++;    
        }
    }
}