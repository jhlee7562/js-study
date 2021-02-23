var user = {

}

console.log(user);

user.name = 'John';
user.surname = 'Smith'
console.log(user);

user.name = 'pete';
console.log(user);

delete user.name;
console.log(user);

console.log("========================");


var salaries = {
    kim : 1000000,
    park : 1600000,
    lee : 1300000
};

var total = 0;
for (var key in salaries) {
    total += salaries[key];
}
console.log(`${total}`);