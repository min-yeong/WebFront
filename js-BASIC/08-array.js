// Array : 인덱스를 엄격하게 체크하지 않고 기존의 배열보다 다양한 방식으로 활용
// Array 객체를 이용한 배열의 생성
const a1 = new Array(10);
const a2 = new Array(); // 빈배열
const a3 = new Array(1, "Java", true); // 어떤 객체든 상관없이 입력
// .length : 배열의 길이
console.log(a1.length, a2.length, a3.length);

// loop
for (let i=0; i<a3.length; i++) {
    console.log(a3[i]);
}

// literal을 이용한 배열의 생성
const a4 = [];
const a5 = ['red', 'green', 'blue', 'yellow'];

// 특정 값으로 채우기
const a6 = new Array(10).fill(5); // 5로 채워진 10개짜리 배열
console.log("a6",a6);
a6.fill("Java");
console.log("a6",a6);

// 객체의 속성도 배열처럼 접근 가능
const person = {
    name : "홍길동",
    age : 28
}
console.log(person['name'], person['age']);
// Array를 Map형 자료형으로 사용가능

// 배열 합치기 : concat
const veges = ['배추', '무', '쪽파'];
const sources = ['소금', '고춧가루', '새우젓'];
const ingr = veges.concat(sources); // veges 배열에 source 배열을 합침
console.log(ingr);

// join : 특정 문자열을 기준으로 배열 요소를 합칠 수 있다
console.log("재료 : ", ingr.join(", "));

// push 와 pop -> stack처럼 활용
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); // 맨 뒤에 새 요소를 추가
console.log(fruits);
console.log(fruits.pop()); // 맨 뒤에서 요소를 추출 후 제거
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits); 
// pop 할 때 배열에 내용이 있는 지 항상 확인
while (fruits.length > 0) {
    console.log(fruits.pop());
}

// shift(가장 첫 요소를 추출 후 제거), push -> Queue처럼 활용 가능 
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("수박");
console.log(fruits);
while (fruits.length > 0) {
    console.log("item : ", fruits.shift());
    console.log("fruits : ", fruits);
}

// splice : 특정 인덱스에서 요소를 삭제하거나 삭제 후 추가
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(2)); // splice의 인자가 1개 -> 해당 인덱스부터 끝까지 추출 후 제거
console.log(fruits);
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("원본 배열 : ", fruits);
console.log("추출 : ", fruits.splice(2, 1)); // splice의 인자가 2개 -> 시작인덱스, 삭제 갯수 
console.log("결과 배열 : ", fruits);
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("원본 배열 : ", fruits);
console.log("추출 후 삽입 : ", fruits.splice(2, 1, "Kiwi", "Guava")); // splice의 인자가 3개 이상 -> 시작인덱스, 삭제 갯수, 추가할 요소
console.log("결과 배열 : ", fruits);

// reverse : 순서 뒤집기
console.log("정렬 전 배열 :", fruits);
fruits.reverse();
console.log("뒤집은 후 배열 : ", fruits);

// sort : 정렬(ASC)
console.log("원본 배열 : ", fruits);
fruits.sort();
console.log("정렬 된 배열 : ", fruits);

let numbers = [1, 7, 3, 7, 9, 1, 9, 15];
numbers.sort(function(v1, v2){
    return parseInt(v1) < parseInt(v2); // 요소를 숫자로 바꿔서 내림차순
});
console.log("정렬 : ", numbers);
// 응용 : 내부 요소 문자열의 길이를 기준으로 정렬하기
console.log("원본 배열 : ", fruits);
fruits.sort(function(v1, v2) {
    return v1.length > v2.length;
});
console.log("정렬 후 배열 : ", fruits);
// sort 매서드에 정렬 기준 비교 함수를 주입하여 정렬 기준 변경 

// slice : 내용 추출, splice와는 달리 추출 내용 삭제는 없음
console.log("원본 배열 : ", fruits);
slices = fruits.slice(1, 2);
console.log("slice : ", slices);
console.log("결과 배열 : ", fruits);

// split : String의 매서드로 특정 구분자를 기준으로 문자열을 잘라서 배열로 추출
const str = "JavaScript is something than other language";
let chunks = str.split(' '); // 공백문자를 기준으로 문자열을 자름
console.log("길이 : ", chunks.length);
for(let i=0; i<chunks.length; i++) {
    console.log("item : ", chunks[i]);
}

// JavaScript의 배열은 인덱스를 엄격히 체크하지 않는다
const a7 = [];
console.log("length of a7 : ", a7.length);
a7[10] = 5;
console.log("length of a7 : ", a7.length);
console.log("a7 : ", a7);