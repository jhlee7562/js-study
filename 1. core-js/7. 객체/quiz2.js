var user = {
    kim1234: 'kkk1234',
    lee4567: 'lll4567',
    park9876: 'ppp9876'
};

while(true){
var id = prompt('아이디를 입력하세요');
if (id in user) {
    var pw = prompt("비밀번호를 입력하세요.");
    if (user[id] === pw) {
        alert("로그인 성공");
        break;
    } else {
        alert('비밀번호가 틀렸습니다. 다시 로그인 하세요.');
    }
} else {
    alert("ID가 존재하지 않습니다.")
}
}



// var user = {
//     kim1234: 'kkk1234',
//     lee4567: 'lll4567',
//     park9876: 'ppp9876'
// };


// while (true) {
//     //사용자가 입력한 아이디
//     var inputId = prompt('아이디를 입력하세요.');

//     //아이디 검증
//     if (inputId in user) {
//         //사용자가 입력한 패스워드
//         var inputPw = prompt('비밀번호를 입력하세요.');
//         //실제 패스워드
//         var realPw = user[inputId];

//         //패스워드 일치 검증
//         if (inputPw === realPw) {
//             alert('로그인 성공!');
//             break;
//         } else {
//             alert('비밀번호가 틀렸습니다.');
//         }
//     } else {
//         alert('존재하지 않는 회원입니다.');
//     }
// }