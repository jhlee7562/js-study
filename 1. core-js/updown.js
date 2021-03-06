//필요한 데이터: 랜덤숫자, 횟수카운트, 카운트다운, 최소값, 최대값

//게임에 필요한 데이터 객체
const gameDatas = {
   secretNumber: Math.floor(Math.random() * 100) + 1,
   count: 0,
   countDown: 6,
   min: 1,
   max: 100
};

//함수 정의부

//무한루프 종료를 확인해주는 함수
function isGameFinish() {
   return inputNumber();
}

//사용자의 입력을 수행하는 함수
function inputNumber() {
   const {
      min,
      max
   } = gameDatas;
   gameDatas.answer = +prompt(`숫자를 입력하세요! [${min} ~ ${max}]`);

   gameDatas.count++;
   gameDatas.countDown--;

   return checkNumber();
}

//사용자의 입력값을 검증하는 함수
function checkNumber() {

   //객체 디스트럭쳐링 (ES6): 데이터 참조시에만 사용, 수정, 추가시엔 사용불가
   const {
      secretNumber,
      count,
      answer,
      countDown
   } = gameDatas;

   // console.log(gameDatas);

   if (secretNumber === answer) {
      alert(`정답입니다!! ${count}번만에 맞추셨군요!!`);
      checkCountDown(countDown);
      return true;
   } else if (secretNumber > answer) {
      alert('UP!!');
      gameDatas.min = answer;
   } else {
      alert('DOWN!!');
      gameDatas.max = answer;
   }
   alertCountDown(countDown);
   return false;
}

//사용자의 남은 카운트다운을 알려주는 함수
function alertCountDown(countDown) {
   if (countDown > 0) {
      alert(`정답 기회 ${countDown}번 남음!`);
   } else {
      alert(`정답 기회 모두 소진! 문제를 계속 풀어주세요!`);
   }
}

//사용자의 카운트다운을 체크하여 승리여부를 알려주는 함수
function checkCountDown(countDown) {
   if (countDown >= 0) {
      alert('You Win!!');
   } else {
      alert('You Lose!!');
   }
}

//핵심 실행부
(function () {
   alert('[UP & DOWN 게임 - 1~100사이의 숫자를 맞춰보세요!]');

   // while (true) {
   //     if (isGameFinish()) break;
   // }

   while (!isGameFinish()) {}

}());