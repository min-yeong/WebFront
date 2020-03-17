// JavaScript(동적 타이핑 언어, 객체기반언어이기 때문에 필요할 때 속성 추가 가능)의 객체 생성
const person = new Object();
person.name = "홍길동";
person.age=28;
person.showInfo = function() {
    let message = "Name : " + this.name
        + ", Age : "+ this.age;
    console.log(message);
}
person.showInfo(); // 속성 접근

// JSON(JavaScript 객체 표현법이지만 범용적으로 사용되는 데이터 형식)을 이용한 객체 생성 
// 속성은 키:값의 쌍으로 이루어지고 값은 숫자, 문자열, 날짜, 불린, 배열, 객체 다 가능
const person2 = {
    name : "이민영",
    age : 24,
    showInfo: function() {
        console.log("Name :", this.name,", Age :", this.age);
    }
}
person2.showInfo();

// Prototype 상속
const Member = function(name, position) {
    this.name = name;
    this.position = position;
};
let m1 = new Member("강백호", "PF");
let m2 = new Member("서태웅", "SF");
console.log("m1 : ", m1);
console.log("m2 : ", m2);

// 동적 타이핑 언어여서 필요할 때 언제든 속성 추가 가능
m1.sayHello = function() {
    // 개별 객체에 추가된 속성(공유 불가)
    console.log(this.name, "님이 당신을 부릅니다.");
}
m1.sayHello();
console.log("m1 : ", m1);
console.log("m2 : ", m2);
// m2.sayHello(); -> 공유되지 않기 때문에 ERROR, m1에서만 사용가능 

// Prototype : 모든 개별 객체가 공유할 수 있는 메모리 공간
Member.prototype.introduce = function() {
    console.log("Name : ", this.name);
    console.log("Position : ", this.position);
}
m1.introduce();
m2.introduce();

console.log("m1 : ", m1);
console.log(m1.constructor);
console.log(Member.prototype);

// String 객체의 prototype확인
console.log(String.prototype);

// 기존 객체들도 동적으로 속성과 메서드를 추가하여 기능을 확장할 수 있다.
String.prototype.sayHello = function() {
    return "Hello, "+ this;
}
console.log("둘리".sayHello());