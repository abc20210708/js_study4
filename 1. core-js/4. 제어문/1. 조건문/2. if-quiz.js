/*
- Quiz. 아래 요구사항에 맞는 코드를 작성하고 
        브라우저에서 실행하여 테스트하세요.
- 요구사항 
1. 사용자는 신장(키)과 나이의 정보를 숫자로 입력할 수 있어야 함.
2. 프로그램은 2가지 정보를 입력하고 엔터를 누르면 조건에 따라 
   다른 결과를 출력해야 함.
3. 키가 140이상이고 나이가 8세이상인 2개의 조건을 모두 만족할 경우 
   “놀이기구에 탑승할 수 있습니다.”를 출력할 것.
4. 두 개의 조건 중 하나라도 만족하지 않을 시 
   “놀이기구에 탑승할 수 없습니다”를 출력할 것.
5. 조건과는 관계없이 “오늘 하루 즐거운 시간되세요!”를 출력할 것!
<힌트> 논리 연산자를 사용해 볼 것!
*/

var height = +prompt("당신의 키는??");
var age = +prompt("당신의 나이는??");

//디버깅
console.log(`키: ${height}, 나이: ${age}`);
console.log(typeof height);

if (height >= 140 && age >= 8) {
    alert("놀이기구를 탈 수 있습니다.");
} else {
    alert("놀이기구를 탈 수 없습니다.");
}
alert("오늘 하루 즐거운 시간되세요!");