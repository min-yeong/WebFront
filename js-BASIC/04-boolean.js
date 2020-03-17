// 논리 값 : true, false : 주로 조건문을 이용하여 논리값을 판단
let a = 10;
let b1 = a > 0;
console.log(a, "> 0?", b1);

// boolean 객체를 이용하여 논리값을 판단
console.log(Boolean("JavaScript"));
console.log(Boolean(""));

// undefined와 null (undefined : 선언만하고 할당되지 않은 상태, null : 값이 없다고 개발자가 선언한 값)
let v1; // 선언만 한 상태
let v2 = null; // 개발자가 임의로 비어있다고 설정한 상태
console.log(v1, v2);

// == : 타입과 상관없이 비교, === : 타입과 값을 비교
v1 = 2019;
v2 = "2019";
console.log(v1 == v2); // 값 비교 
console.log(v1 === v2); // 값과 함께 타입 비교


