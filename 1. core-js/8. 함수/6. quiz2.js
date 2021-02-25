
// function calcDivisor(number){
//     var discount = 0;
//     for(var nuㅡ = 1; num<=number ; num++){
//         if(number % num ===0)
//         console.log(`${num}의 약수 : ${}`);


//     var divCount = 
//     }


// var divCount = calcDivisor(24);
// console.log(`약수의 개수: ${divCount}개`);



function calcDivisor(targetNumber){
    var divisor = [];
    for(var n=1; n <= targetNumber; n++){
        if (targetNumber % n === 0){
            divisor.push(n);
        }
    }
    console.log(`${targetNumber}의 약수:[${divisor}]`);
    return divisor.length;
}