
var a = 5;
var b = '5';
console.log(a == b); // == 연산자는 암묵적으로 문자열 내부에 숫자가 있으면 자동으로 숫자로 변환 후 비교
console.log(a === b); // === 연산자는


//동등비교는 결과 예층이 힘드므로 사용하지 않는 것을 추천
console.log("======================================");
console.log('0' == '');
console.log(0 == '');
console.log('0' == 0);
console.log(false == 'false');
console.log(0 == '0');

//일치비교에서는 NaN을 주위 , NaN은 자신과 일치하지 않는 유일한 값
console.log("========================================");
console.log(NaN === NaN);
console.log(isNaN(NaN, NaN));

//대소 비교
console.log("=========================================");
var x = 10;
console.log(x > 5);
console.log(x <= 10);

//문자열 비교
console.log("===========================================");

console.log('apple' === 'APPLE');

console.log('ace' < 'ade');
console.log('복숭아' > '감자');
console.log('ZEBRA' > 'apple');

