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
    //진행율 계산
    let timeLast = time - startTime;
    let progress = timeLast / duration;

    if (progress < 0) progress = 0; //처음시작시 진행률 0으로고정
    if (progress > 1) progress = 1;//진행 완료시 진행률 1로고정
    if (progress < 1) requestAnimationFrame(run_plus);//진행률이 1로 도달하기 전까지만 반복

    //진행률에따라 선택요소 css값을 변경
    let result = current_value + ((target_value - current_value) * progress);
    //현재 값((추가값 - 현재값)* 진행값);
    box.style.marginLeft = result + "px";
}