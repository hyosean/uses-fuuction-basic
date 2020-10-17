/*
setInterval(함수, 실행간격)
 - 특정함수를 일정시간 간격마다 반복해서 호출

 clearInterval(timer);
 - setInterval의 반복을 중지시키는 함수
*/
var i = 0;

var timer = setInterval(function () {
    i += 3;

    if (i >= 40) {
        clearInterval(timer);
        i = 40;
    }

    console.log(i);
}, 500);


const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

let time = 0;

btn.onclick = function () {
    time += 2;

    timer = setInterval(() => {
        if (time >= 400) {
            clearInterval(timer);
            time = 400;
        }
        box.style.marginLeft = time + "px";
    }, 50);

}





