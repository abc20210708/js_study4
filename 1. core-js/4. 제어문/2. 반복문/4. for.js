
//1~10까지 누적합을 구하는 로직
var total = 0;

for (var n = 1; n <= 10; n++) {
    total += n;   
}
console.log(`총합: ${total}`);

// 1 ~ 100사이의 정수 중 8의 배수를 모두 출력
for (var num = 1; num <= 100; num++) {
    if (num % 8 === 0) {
        console.log(num);
    }    
}
console.log('========================');

// 50 ~ 350사이 정수 중 9의 배수이면서 18의배수가 아닌 모든 정수를 출력 

for (var num2 = 50; num2 <= 350; num2++) {
    if (num2 % 9 === 0 && num2 % 18 !== 0) {
        console.log(num2);
    }    
}

// 1 ~ 4000사이 정수 중 11의 배수의 개수를 구하시오
var count = 0;

for (var number = 1; number <= 4000; number++) {
    if (number % 11 === 0) {
        count++;
    }    
}
console.log(`11의 배수의 개수: ${count}`);