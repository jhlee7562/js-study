

function calcNumbersTotalAndAverage(...number){
    var total = 0;
    for (var n of number)
        total += n;
    var avg = total / number.length;
    return{
        total : total,
        avg : avg
    };
    // return{
    //     total,
    //     avg
    // };

return [result.total, result,avg]

}


var result = calcNumbersTotalAndAverage(90, 80, 100, 90);
console.log(`총합 : ${result.total}, 평균 : ${result.avg}`);