
// 1 ~ 10까지의 누적합
var total = 0;
var n = 1;

while (n <= 10) {
    total += n;
    n++;
}
console.log(total);

console.log('===================');

var x = 1;
while (x <= 10) {
    console.log('메롱~!');
    x++;
}

console.log('=======================');

// 1 ~ 100사이의 정수 중 8의 배수를 모두 출력
var num = 1;
while (num <= 100) {
    if (num % 8 === 0) {
        console.log(num);
    }
    num++;
}
console.log('========================');

// 50 ~ 350사이 정수 중 9의 배수이면서 18의배수가 아닌 모든 정수를 출력 
var num2 = 50;
while (num2 <= 350) {
    if (num2 % 9 === 0 && num2 % 18 !== 0) {
        console.log(num2);
    }
    num2++;
}

// 1 ~ 4000사이 정수 중 11의 배수의 개수를 구하시오
var count = 0;
var number = 1;
while (number <= 4000) {
    if (number % 11 === 0) {
        count++;
    }
    number++;
}
console.log(`11의 배수의 개수: ${count}`);