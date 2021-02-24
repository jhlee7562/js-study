

//begin부터 end까지 총합을 구해주는 함수
function calcRangeTotal(begin, end) {
    console.log(`begin : ${begin}`);
    console.log(`end : ${end}`);
    var total = 0;
    for (var n = begin; n <= end; n++){
        total += n;
    }
    return total;
}

console.log("====================================");
function sayHello(langeage = '한국어') {

    // langeage = langeage || '한국어';

    if(langeage === '한국어'){
        console.log('안녕하세요');
    } else if (langeage === '영어'){
        console.log('헬로');
    } else if (langeage === '일어'){
        console.log('곤니치와');
    }
}

function selectRandomFood(){
    var rn = Math.random();
    return rn > 0.5 ? '짜장면' : '짬뽕';
}

function multiply(n1, n2) {
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        console.log('숫자를 전달하세요');
        return;
    }
    return n1 * n2;
}

var res = multiply(3, 20);
console.log(res);

console.log(`랜덤음식 : ${selectRandomFood()}`);

console.log("====================================");

sayHello();
sayHello('일본어');


console.log("====================================");

//함수호출
var result = calcRangeTotal(10, 30, 50);
console.log(result);
