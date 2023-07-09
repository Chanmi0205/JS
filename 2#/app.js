// 2#_0
alert("hi")
1+1

// 2#_1
// integer, float
// 1, 1.3, ,,,

// String
// "hello" X -> 'hello' O

// 2#_2
// string 
console.log("hello");
console.log('hello');
// operation
console.log(5+2);
console.log(5-2);
console.log(5*2);
console.log(5/2);
console.log(5%2);
// variable
// const(상수) 
const a = 5;
const b = "2";
console.log(a+b);
// console.log(a*b);
// console.log(a/b); // error

// 2#_3
// let(변수)

// 2#_4 Booleans
let check = true;
check = false;
notThink = null; //undefined

// 2#_5 Arrays
let days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
days.push("hello");
console.log(days);
console.log(days[2]);

// 2#_6 Objects
let player = {
    name : "chanmi",
    age : 18,
};
console.log(player.age);
player.lestName = "potato";
console.log(player);
player.age += 1;

// 2#_7 Functions part One
// function은 내가 계속 반복해서 사용할 수 있는 코드 조각이다!
function sayHello() {
    console.log("Hello");
}
sayHello();

//2#_8 Functions part Two
// 매개변수
function sum(a, b) {
    console.log(a+b);
}
sum(2,3);

const player2 = {
    name: "nico",
    sayHi: function(otherPersonsName) {
        console.log("hi, " + otherPersonsName);
    },
};
console.log(player2.name);
player2.sayHi("Chanmi");

// #2_9, #2_10(#2_0~#2_8) Recap(복습 및 요약)

// #2_11 Returns
let age = 18;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}
console.log(calculateKrAge(age));

// #2_12(#2_11) Recap(복습 및 요약)

// #2_13 Conditionals
let age2 = parseInt(prompt("How old are you?"));
console.log(typeof age2);

// #2_14 Conditionals par Two
let age3 = parseInt(prompt("How old are you?"));
let age4 = prompt("How old are you?");
console.log(isNaN(age3)); //isNaN: 입력된 값이 숫자가 아닐 때 true로 반환함
console.log(isNaN(age4)); 

// #2_15 Conditionals part Three 
if(isNaN(age4)) {
    // 입력된 값이 숫자가 아닐 때
    console.log("잘못된 입력값입니다.");
} else if(age4 < 20) {
    console.log("미성년자입니다.");
} else {
    console.log("성인입니다.");
}

// #2_16(#2_13~#2_15) Recap (복습 및 요약)
