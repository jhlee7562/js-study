
//배열
var scores = [98, 32, 66, 87, 49, 12, 99, 83, 99, 99];
var total = 0;
// for(var i = 0; i < scores.length; i++){
//     total = total + scores[i]
// }
for (var num of scores){
    total = total + num;
}


var Average = total / scores.length;

// Average = Math.round(Average*100) / 100;

console.log(`총점 : ${total}점, 평균 : ${Average}점`);







//     console.log(`총점 : ${scores[i]}`);
// }
//  var Average = total / scores.length;
 

