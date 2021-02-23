

//splice() : 배열의 특정 요소 제거
var foods = ['떡볶이', '오뎅', '김말이', '닭꼬치']
console.log(foods);

var delFoods = foods.splice(1,2);
console.log(foods);
console.log(delFoods);

foods.splice(0, 1, '치킨', '파스타');
console.log(foods);

foods.splice(2, 0, '피자');
console.log(foods);

//2번부터 끝까지 삭제
foods.splice(2);
console.log(foods);

foods.push('보쌈', '닭발');
console.log(foods);

//사용자의 삭제 요구 데이터
console.log("========================");
var input = '보쌈';

if (foods.includes(input)){
    foods.splice(foods.indexOf(input),1);
    console.log(`${input} 삭제완료`);
} else {
    console.log(`${input} 데이터가 없습니다`);

} 

console.log(foods);