// if : 조건분기
const num=10;
// 0보다 크면 양수, 0보다 작으면 음수 , 0이면 0출력
if(num>0) {
    console.log(num, "은 양수");
}
else if(num<0) {
    console.log(num, "은 음수");
}
else {
    console.log(num, "은 0");
}

// switch 문 
// a, b면 good c면 pass, f면 Fail. 그 예외의 값은?
let grade = "C"; 
switch (grade) { 
    case "A": 
    case "B": 
    case "C": 
    case "D": 
        console.log("Pass"); 
        break; 
    case "F": 
        console.log("Fail"); 
        break; 
    default: console.log("?"); 
        break; 
}

// 연습문제 
// 1. 구구단 
// for문 이용
for(let i1=2; i1<10; i1++) {
    for (let j1=1; j1<10; j1++)
        console.log(i1+"*"+j1+"="+i1*j1);
}
// while문 이용
let i2 = 2;
while(i2<10) {
    let j2 = 1;
    while(j2<10) {
        console.log(i2+"*"+j2+"="+i2*j2);
        j2++;
    }
    i2++;
} 
// 2. *이 5개부터 1개까지 거꾸로출력
// for문 이용
for(let i3=5; i3>0; i3--) {
    let v = "";
    for(let j3=1; j3<=i3; j3++) {
        v += "*";
    } 
    console.log(v);
}
// while문 이용
let i4 = 5;
while(i4>0) {
    let v2 = "";
    let j4=1;
    while(j4<=i4) {
        v2 += "*";
        j4++;
    }
    console.log(v2);
    i4--;
}