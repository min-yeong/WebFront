// JavaScript의 number : 산술 연산 가능
let n1 = 5; // Literal(소스에 직접 입력)
let n2 = Number(5);
console.log(n1, "==", n2, "?", n1==n2);
console.log(typeof n1, typeof n2);

// 여러 형태의 수치 데이터
const hex = 0xFFCCAA; // 16진수 데이터 (0x)
const oct = 0o10; // 8진수 데이터 (0o)
console.log(hex, oct);

// 수학 함수의 활용 (Math 객체 사용)
console.log(Math.PI);
console.log(Math.min(1, 5, 7, 2, 6), Math.max(1, 5, 7, 2, 6));
console.log(Math.round(3.567), Math.floor(3.567));

// 그 외 number가 가지고 있는 상수들
console.log("최대 정수 : ", Number.MAX_SAFE_INTEGER);
console.log("최소 정수 : ", Number.MIN_SAFE_INTEGER);
console.log("표현 할 수 있는 최대 수 : ", Number.MAX_VALUE);
console.log("표현 할 수 있는 최소 수 : ", Number.MIN_VALUE);

// Casting
console.log("----- Casting : parse 계열 함수들");
// js는 동적 타이핑 언어 : 주로 parameter로 문자열이 넘어오는 경우가 많아 casting이 필요
console.log(parseInt("011"));
console.log(parseInt("011", 2)); // 011이 2진수다(진법 변환 casting)
console.log(parseInt("123.456")); // 정수형 변환
console.log(parseFloat("123.456")); // 실수형 변환
console.log(parseInt(Math.PI)); // 실수형 -> 정수형으로 변환

// 숫자로 변환 할 수 없는 형태의 문자열을 숫자로 변환할 경우 : NaN(Not a Number)
let v = parseInt("abcd1234");
console.log(v, "is", typeof v);
// NaN인지 확인하기 위한 isNaN() 함수
console.log(v, "is NaN?", isNaN(v));
console.log(v + 10); // NaN이 포함된 산술연산 : 결과는 NaN

// Infinity
let result = 1/0;
console.log("1/0=", result);
console.log(typeof result);
// Infinity를 산술연산에 포함시키면 Infinity
console.log(result+10);
// Infinity인지 아닌지 확인 : isFinite()
console.log(isFinite(result));
console.log(isFinite(2019));
console.log(isFinite(parseInt("abcd1234")));  // Nan은 유한수가 아님