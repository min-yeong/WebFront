// Date
let now = new Date(); // 현재시간
console.log("현재 시간 : ", now);
let time = new Date(2019, 9, 15); // 달은 0부터 시작 -> 2019.10.15
console.log("Time : ", time);
time = new Date(2019, 9, 15, 12, 30, 30); // 년월일시분초
console.log("Time : ", time);
console.log("현재 시간 : ", now);

// 메서드 (Getter)
console.log("년도 : ", now.getFullYear());
console.log("월 : ", now.getMonth()+1); // 달은 0부터 시작
console.log("일 : ", now.getDate());
console.log("요일 : ", now.getDay()); // 요일은 0=일요일
