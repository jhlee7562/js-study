// function showNumbers(n){
//     for (var i = 1; i <= n; i++)
//         console.log(i);
// }

// function showNumbers(n){
//     for (var i = 1; i <= n; i++){
//         if (i % 2 === 0){
//             console.log(i);
//         }
//     }
// }

// function showNumbers(n){
//     for (var i = 1; i <= n; i++){
//         if (i % 2 === 1){
//             console.log(i);
//         }
//     }
// }

//콜백 함수
function showNumbers(n, func) {
    for (var i = 1; i <= n; i++) {
        func(i);

    }
}

showNumbers(10, function (i) {
    if (i % 2 === 0) {
        console.log(i);
    }
});

// showNumbers(30, n => )

console.log("=========================================");

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filter(arr, condition) {
    var filtered = [];
    for (var n of arr) {
        if(condition(n)) {
            filtered.push(n);
        }
    }
    return filtered;
}
var filtered = filter(numbers, n => n % 2 === 0);
console.log(filtered);


// var filtered = number.filter(n => n % 2 === 1);
//var mapped = number.map(n => n ** 2)

// var mapped = [];
// for 9
// var n of (numbers) {
//     mapped.push(n ** 2);
// }
// console.log(mapped);