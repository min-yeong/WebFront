// String 객체
const s1 = "Modern JavaScript"; // Liternal 설정
const s2 = String("I like JavaScript, I like Java");
console.log(typeof s1, typeof s2);
// String은 유니코드 문자의 나열 : 길이를 잡을 수 있음
console.log(s1, ", LENGTH=", s1.length);

// 문자열 추출
console.log(s1.charAt(7)); // 7번 인덱스의 문자
console.log(s1[7]); // 배열처럼 접근 가능
console.log(s1.substr(7, 10)); // 7번 인덱스부터 10글자 추출
console.log(s1.substring(7, 17)); // 7번 인덱스부터 17번째 이전까지 추출
console.log(s1.substring(7)); // 두번째 인자값이 없는 경우 끝까지 추출

// 문자열 검색
console.log(s2.indexOf("Java")); // 문자열 내에서 처음부터 "Java" 뮨자열의 인덱스 검출
let idx = s2.indexOf("Java");
console.log(s2.indexOf("Java", idx+1));  // 첫번째 "Java" 외에 다른 "Java"가 있는 지 검색
idx = s2.indexOf("Java", idx+1);
console.log(s2.indexOf("Java", idx+1)); // 그 다움 "Java"가 없는 경우 -1반환
console.log(s2.lastIndexOf("Script")); // 검색 방향이 뒤 -> 앞, 결과 인덱스는 양수로 반환

// 문자열 치환 : 원본이 변경되는 것이 아니고 새 String 을 만들어 낸다
console.log(s1.replace("JavaScript", "ECMAScript")); 
console.log("원본 : ", s1);
// 좌우 공백 문자 제거 : trim
const s3 = "     JavaScript    ";
console.log(s3.trim());

// -------String과 관련된 내용 보충
/* Escape 문자 정리 : 
    \n : 개행(줄바꿈)
    \t : 탭문자
    \" : 쌍따옴표
    \' : 홑따옴표
    \` : 백틱(ES6 규격)
    \$ : 달러기호(ES6 규격)
*/
let message = "Hello";
message = "He said, \"I\'m home\"";
console.log(message);

//ES6의 확장된 문자열 처리 방법
// 1. 템플릿 스트링
let temp = 24;
// 문자열을 현재 온도는 00도 입니다. 
message = "현재 온도는 "+temp+"도 입니다.";
console.log(message);
// ES6 활용
message = `현재 온도는 ${temp}도 입니다.`; // 백틱 문자열과 달러를 이용한 출력
console.log(message);
// 여러 줄 문자열을 만들고자 할때 
message = "ES5에서 여러 줄 문자열을 만드는 것\n쉽지 않습니다.";
console.log(message);
// ES6 활용
message = `하지만 ES6에서는 
아주 손쉽게 
여러 줄 문자열을 만들 수 있습니다.`;
console.log(message);