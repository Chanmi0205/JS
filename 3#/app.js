// #3_0 The Document Object 
// document : 브라우저에 이미 존재하는 object
// console.dir(document) : Object 정보 출력
console.log(document.title);
document.title = "test2";

// #3_1 HTML in Javascript
// document, element
let title2 = document.getElementById("title2");
// document.getElementsByClassName
console.dir(title2);
title2.innerText="Got you!";

// #3_2 Searching For Elements
let hellos = document.getElementsByClassName("hello");
console.log(hellos);
hellos[0].innerText = "Good!";

let text1 = document.querySelector(".text1 #title2"); // 한번만 사용가능
console.log(text1);

let text2 = document.querySelectorAll(".text2 #title2");
console.log(text2);

// #3_3 Events, #3_4 Events part Two
// ex. h1 html element man 검색
// onclick X, click O
let test = document.querySelectorAll(".hello");
test[0].style.color = "blue";

function handleTitleClick() {
    console.log("title was clicked!");
    test[0].style.color = "red";
}

function handleMouseEnter() {
    test[0].innerText = "Mouser is here!";
}

function handleMouserLeave() {
    test[0].innerText = "Mouse is gone!";
}

test[0].addEventListener("click" , handleTitleClick); 
//test[0].onclick = handleTitleClick;
test[0].addEventListener("mouseenter" , handleMouseEnter);
test[0].addEventListener("mouseleave" , handleMouserLeave);

// #3_5 More Events - https://nomadcoders.co/javascript-for-beginners/lectures/2895

// #3_6 CSS in Javascript
let text = document.querySelector(".test");

function handleTitleClick2() {
    let currentColor = text.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    text.style.color = newColor;
}
text.addEventListener("click", handleTitleClick2);

// #3_7 CSS in Javascript part Two
let test37 = document.querySelector(".test37");
function handleTitleClick3() {
    if(test37.className === "") {
        test37.className = "active";
    } else {
        test37.className = "";
    }
}
test37.addEventListener("click", handleTitleClick3);

// #3_8 CSS in Javascript part Three
let test38 = document.querySelector(".test38");
function handleTitleClick4() {
    let clickedClass = "clicked";
    if(test38.classList.contains(clickedClass)) {
        test38.classList.remove(clickedClass);
    } else {
        test38.classList.add(clickedClass);
    } 
}
test38.addEventListener("click", handleTitleClick4);