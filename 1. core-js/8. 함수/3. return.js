
function add(n1, n2) {
    return n1 + n2;
    var result = n1 - n2;
    console.log('ddddd');
    return 10;
}

//void 함수 : 리턴값이 없는 함수
//void 함수는 단독 호출해서 사용할 뿐, 다른 함수의 인자로 
//전달할 수 없음.
function sub(n1, n2) {
    console.log(`${n1} - ${n2} = ${n1-n2}`);        
}

function greeting(nickname) {
    badNick = ['쓰레기', '바보', '양아치'];
    if (badNick.includes(nickname)) {
        console.log('그런 나쁜말은 하지 마세요!');
        return; //탈출문
    }
    console.log(`${nickname}님 안녕하세요!`);
}

function testFunc() {
    while (true) {
        if (true) {
            return;
        }
    }
    var a = 10;
}

function operationAll(n1, n2) {
    return {
        plus: add(n1, n2),
        minus: n1 - n2,
        multi: n1 * n2,
        divide: n1 / n2
    };
}

var results = operationAll(10, 2);
console.log(results.plus);
console.log(results.minus);
console.log(results.multi);

greeting('쓰레기');
console.log('==============================');

var res1 = add(add(5,5), add(add(10,10), add(50,5)));
console.log(res1);

sub(add(sub(5,5), add(add(10,10), add(50,5))), 10);

console.log("=================================");

sub(30, 55);
var res = sub(30, 17);
console.log(res);

var result = add(5, 8);
var result2 = add(result, result * 2);
console.log(result2);