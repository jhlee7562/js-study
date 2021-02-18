var tall = +prompt("키를 입력하세요.");
var age = +prompt("나이를 입력하세요.");

//디버깅
// console.log(`키 : ${tall}, 나이 : ${age}`);
// console.log(typeof tall);


if (tall >= 140 && age >= 8) {
    alert(`놀이기구에 탑승할 수 있습니다.`);
} 

else {
    alert(`놀이기구에 탑승할 수 없습니다.`);
}

alert("오늘 하루 즐거운 시간되세요~!");
