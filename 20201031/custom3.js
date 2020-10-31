
const btn = document.querySelector("button");
const box = document.querySelector(".box");


btn.onclick = function () {
    //함수의 인수로 객체를 받음
    animate(box, {
        prop: "margin-left",
        value: 500,
        duration: 1000
    });
}

function animate(el, option) {
    const startTime = performance.now();
    let current_value = parseInt(getComputedStyle(el)[option.prop]);
    requestAnimationFrame(run_plus);

    function run_plus(time) {
        //진행율 계산
        let timeLast = time - startTime;
        let progress = timeLast / option.duration;

        if (progress < 0) progress = 0; //처음시작시 진행률 0으로고정
        if (progress > 1) progress = 1;//진행 완료시 진행률 1로고정
        if (progress < 1) requestAnimationFrame(run_plus);

        //진행률에따라 선택요소 css값을 변경
        let result = current_value + ((option.value - current_value) * progress);
        el.style[option.prop] = result + "px";
    }
}
