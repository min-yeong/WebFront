// 한줄 주석
/* 
    여러줄 주석 
*/
// consloe 내장 객체 : JavaScript console에 메세지를 출력
console.error("에러 메세지");
console.warn("경고 메세지");
console.debug("개발용 디버그 메세지");
console.info("정보 메세지");
console.log("Hello, Node.js");

// 내용을 연속으로 출력할 경우 ,로 구분
console.log("String", 10);

// 객체의 내용을 접근할 때는 .으로 접근
console.log(Math.PI); // 속성
console.log(Math.max(1, 3, 2, 8, 7)); //메서드 접근

// 내장 객체 process
console.log("process obj");
console.log(process);
console.log(process.version, process.platform);

// var, get, const
console.log("==== var, let, const");
var testVar = 10; // ES6 이전 변수 할당법 -> WEB에서는 당분간 이것만 활용
// ES6 이후버전에는 let과 const 사용 가능
let testLet = "let"; // 재할당 가능변수
const testCons = "const"; // 재할당 불가, 상수로 활용, 선언과 동시에 할당

/* 
- ES6가 지원된 환경에서는 var, const 활용
- const를 먼저 생각 -> 만약 데이터 변경이 이뤄져야 한다면 let으로 변경
*/ 

// JavaScript는 동적 타이핑 언어 : 데이터가 할당되었을 때 타입이 결정됨
let v;
console.log("v is", typeof v); // 데이터 타입 확인 -> typeof를 이용
v = "String";
console.log("v is", typeof v); // 어떤 타입이든 할당 가능
v = 2019;
console.log("v is", typeof v); // 동적 타이핑 언어 -> 항상 변수의 type을 잘 확인 할 것

function sandBox(val1, val2, func) { if (typeof func == "function") func(val1, val2); }
sandBox(3, 4, function(v1, v2) { console.log(v1 + v2); })
