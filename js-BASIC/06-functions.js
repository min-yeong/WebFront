// JavaScrpit의 함수
// 함수 선언
function sum(a, b) { 
return a+b;
}
// 함수 사용
console.log(sum(10, 20));

// 함수 표현식 : 이름이 없는 함수 -> 익명 함수
const asum = function(a, b) {
    return a+b;
}
console.log(typeof asum, asum(10, 20));

// 익명 함수의 활용 : 초기화 코드(일회성 실행) 작성
let initText; // 매개변수로 넘어온 값이 짝수면 짝수, 홀수면 홀수로 initText를 초기화
// 초기화 함수
(function(number) {
    // number를 전달 받아서 숫자의 짝홀수를 판단 -> initText에 설정
    let textList = ["짝수", "홀수"];
    let remain = number % 2;
    initText = textList[remain];
})(5); // -> 즉시실행
console.log(initText);
// console.log(textList); -> 초기화 작업에만 일시적으로 쓰이는 변수 

// 함수의 매개변수 (arguments) 
function getNumberTotal() {
    // arguments : 함수 선언부와 상관없이 실제로 함수가 호출되었을 때 전달된 모든 매개변수를 arguments 객체로 전달(JS Engine) -> 가변인자처럼 활용
    console.log("매개변수 : ", arguments);
    let result = 0; // 합산값 저장 변수
    for (let i=0; i<arguments.length; i++) {
        // console.log("ARG", i, ":", arguments[i]);
        // type을 체크해서 number만 합산
        if (typeof arguments[i] == "number") {
            result += arguments[i];
        }
    }
    return result;
}
let res1 = getNumberTotal(1, 2, 3, 4, 5, 6);
let res2 = getNumberTotal(1, 2, "3", 4, "5", 6);
console.log(res1);
console.log(res2);

// Callback 함수 : JavaScript의 함수는 다른 함수의 매개변수로 넘겨줄 수 있다. js함수는 그 자체로 객체이다
function calcUsingCallback(v1, v2, func) {
    // Callback 함수는 함수내에서 전달받은 외부함수를 다시 거꾸로 실행, 내부에서 실행할 실제 기능(연산식)은 일단 미정 상태로 두고 실제 실행 함수를 외부로부터 전달받아서 실행하는 것 
    if (typeof func == "function") {
        // 실제 호출 가능한 함수인가 확인
        func(v1, v2); // 콜백 수행
    }
}
calcUsingCallback(3, 4, function(v1, v2) {
    // calcUsingCallback 함수에서 callback할 로직
    console.log(v1 + v2);
});
calcUsingCallback(3, 4, function(v1, v2) {
    console.log(v1 * v2);
});

// ES6의 화살표 함수 : => 
const f1 = function() { return "Hello" };
const f1Arrow = () => "Hello";
console.log(f1(), f1Arrow());

const f2 = function(name) {return "Hello, " + name};
console.log(f2("Bit"));
const f2Arrow = (name) => "Hello, "+ name;
console.log(f2Arrow("Bit"));