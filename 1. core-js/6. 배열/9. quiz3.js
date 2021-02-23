// var tvxq = ['유노윤호', '최강창민', '영웅제중', '믹키유천', '시아준수'];

// while (true) {
//     var del = prompt("삭제할 멤버 이름을 입력하세요");

//     var input = indexof(del)

//     if (0 <= input) {
//         alert(`${del}이 삭제완료`);
//         tvxq.splice(input);
//     } else {
//         alert(`${del}은 잘못된 이름입니다`);
//     }
// }


var tvxq = ['유노윤호', '최강창민', '영웅제중', '믹키유천', '시아준수'];

while (true) {
    if (tvxq.length ==0 ) {
        break;
    }

    var delName = prompt(`현재 멤버 : [${tvxq}]\n삭제할 이름을 입력하세요.`);
    if (tvxq.includes(delName)) {
        if (confirm(`${delName}을(를) 정말로 삭제하시겠습니까?`))
        tvxq.splice(tvxq.indexOf(delName), 1);
        alert(`삭제완료 \n남은 멤버 : [${tvxq}]`);
    } else {
        alert(`${delName}은(는) 잘못된 이름입니다.\n다시입력하세요.`);
    }
}