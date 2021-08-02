
var greeting;
greeting = 'hello';
greeting = "안녕ㅎㅎ";
greeting = `잘가~`;

console.log(typeof greeting);

var str = '그는 나에게 "안녕"이라고 말했다.';
console.log(str);

str = "Let's Go!";
console.log(str);

str = "그는 나에게 \"안녕\"이라고 말했다.";

//탈출 문자
str = '나는 \t\t 홍길동 \n입니다.';
console.log(str);

var filePath = 'D:\\temp\\new_icon.png';
console.log(filePath);


//템플릿 리터럴 (ES6: 2015)
var lyrics = "링딩동 링딩동 링디기딩기디링딩동~~~~~\n링딩동 링딩동 링디기딩기디링딩동~~~~~\n링딩동 링딩동 링디기딩기디링딩동~~~~~\n링딩동 링딩동 링디기딩기디링딩동~~~~~";
// console.log(lyrics);

lyrics = `링딩동 링딩동 링디기딩기디링딩동~~~~~
링딩동 링딩동 링디기딩기디링딩동~~~~~
링딩동 링딩동 링디기딩기디링딩동~~~~~
링딩동 링딩동 링디기딩기디링딩동~~~~~`;
console.log(lyrics);

var month = 12;
var day = 25;
var anni = '크리스마스';

console.log(month + '월 ' + day + '일은 ' + anni + '입니다.');
console.log(`${month}월 ${day}일은 ${anni}입니다.`);

