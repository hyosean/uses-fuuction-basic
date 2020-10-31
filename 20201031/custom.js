/*

requestAnimationFrame()

performance.now();

*/

const btn = document.querySelector("button");
const box = document.querySelector(".box");

let startTime;
let duration = 1000;
let i = 0;
let current_value;//기존 위치값
let target_value = 500;//추가될 값


btn.onclick = function () {
    startTime = performance.now();//브라우져 로딩기준으로 카운트 된 시간값
    console.log(startTime);

    current_value = parseInt(getComputedStyle(box).marginLeft);

    requestAnimationFrame(run_plus);

}


//실행할 함수
function run_plus(time) {
    //requestAnimationFrame의 콜백함수는 해당 함수가 동작되는 시간을 자동으로 전달
    i++;
    console.log(i);
    console.log("현재 반복 실행 시간 : " + time);
    let timeLast = time - startTime;
    console.log("누적 시간 : " + timeLast);

    timer = requestAnimationFrame(run_plus); //무한반복의 재귀함수

    //진행률
    let progress = timeLast / duration;
    console.log("진행률 :" + progress);
    //변화될 수치값
    let result = current_value + ((target_value - current_value) * progress); //현재 값((추가값 - 현재값)* 진행값);
    box.style.marginLeft = result + "px";

    if (progress < 0) progress = 0; //브라우져 내 음수 값 보정
    if (progress > 1) {
        progress = 1;
        cancelAnimationFrame(timer);//조건을 준뒤 변수값활용 반복을 끊음
    }

}