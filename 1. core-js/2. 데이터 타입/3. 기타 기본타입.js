
//논리 타입
var logical = false; // true, false 
console.log(typeof logical);

// logical = True;
logical = 'true';


//undefined타입 -> undefined값 : 변수를 초기화하지 않았을 때
var hello;
console.log(hello);

//null -> 의도적으로 없는 값
var apple = '사과';
apple = null;

var hello = saying => {
    if (saying === '즐') return null;
    else return "안뇽~";
}

console.log("hello" * '메롱');