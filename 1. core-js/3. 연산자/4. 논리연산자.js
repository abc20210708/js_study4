
var t = true, f = false;

// && : AND 연산
console.log(t && t);
console.log(t && f);
console.log(f && t);
console.log(f && f);

console.log('=====================');

// || : OR연산
console.log(t || t);
console.log(t || f);
console.log(f || t);
console.log(f || f);

// NOT 연산 (!) : 논리반전
console.log('=======================');
console.log(!t);
console.log(!f);

//  hasMoney() : 돈이 있으면 true, 없으면 false
//  if (!hasMoney())

var money = 0;
if (!money) {
    console.log('그지니까 집에있자.');
} else {
    console.log('쇼핑을 하자!');
}