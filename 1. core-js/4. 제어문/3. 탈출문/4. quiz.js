/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 프로그램 실행 시 0~100사이의 무작위 두 수의 합을 
   물어보는 문제가 지속적으로 출제되게 하세요.
2. 올바른 답을 입력할 시 “정답입니다”를 
   틀린 답을 입력할 시 “오답입니다”를 출력하세요.
3. 사용자가 0을 입력하면 문제 출제를 중단하고 
   누적된 정답 횟수와 오답횟수를 출력하세요.
*/

// 프로그램이종료되었습니다.
// 정답회수 오답횟수


// while(true){

//    var x = Math.floor(Math.random() * 101);
//    var y = Math.floor(Math.random() * 101);
//    var z = +prompt(`${x} + ${y} = ??`);

//    if(x + y == z) {
//    alert("정답입니다.");
// } else if(x + y !==z && z !== 0) {
//    alert("오답입니다.");
// } else if(z === 0) {
//    // alert("정답횟수 ${}  오답횟수 ${}");
//    break; 
// }
// }
//    alert("프로그램이 종료되었습니다.");


//    var correctCount = 0, incorrectCount = 0;


// while (ture) {
//    var first = Math.floor(Math.random() * 101);
//    var second = Math.floor(Math.random() * 101);

//    var operatorNum = Math.floor(Math.random() * 3);

//    var operatorMark;
//    if (operatorMark === 0) {
//       operatorMark = '+';
//    } else if (operatorNum === 1) {
//       operatorMark = '-';
//    } else {
//       operatorMark = 'x';
//    }

//    var userAnswer = +prompt(`${first} ${operatorMark} ${second}= ??`);

//    if (userAnswer === 0) {
//       break;
//    }

//    var realAnswer = first + second;

//    if (userAnwser === realAnswer) {
//       alert('정답입니다.');
//       correctCount++;
//    } else {
//       alert('오답입니다');
//       incorrectCount++;
//    }
// }

// alert('프로그램이 종료되었습니다. # 정답 횟수 : ${correctCount}회, 틀린 횟수 : ${incorrectCount}회');


//정답 횟수 오답 횟수 저장변수
var correctCount = 0, incorrectCount = 0;

while (true) {
    //1 이상 20이하의 랜덤 정수
    var first = Math.floor(Math.random() * 20) + 1;
    var second = Math.floor(Math.random() * 20) + 1;

    //0 1 2 의 랜덤정수 생성
    var operatorNum = Math.floor(Math.random() * 3);

    //랜덤 연산 부호 생성
    var operatorMark;
    if (operatorNum === 0) {
        operatorMark = '+';
    } else if (operatorNum === 1) {
        operatorMark = '-';
    } else {
        operatorMark = 'x';
    }

    //사용자가 입력한 답
    var userAnwser = +prompt(`${first} ${operatorMark} ${second} = ??`);
    // console.log("userAnswer: " + userAnwser);

    //탈출조건 (0입력시)
    if (userAnwser === 0) {
        break;
    }

    //실제 정답
    var realAnswer;
    if (operatorMark === '+') {
        realAnswer = first + second;
    } else if (operatorMark === '-') {
        realAnswer = first - second;
    } else {
        realAnswer = first * second;
    }

    //정오답 판별
    if (userAnwser === realAnswer) {
        alert('정답입니다!');
        correctCount++;
    } else {
        alert('오답입니다!');
        incorrectCount++;
    }
}//end while

alert(`프로그램이 종료되었습니다.
# 정답 횟수: ${correctCount}회, 틀린 횟수: ${incorrectCount}회`);