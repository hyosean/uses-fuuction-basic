
const btn = document.querySelector("button");
const box = document.querySelector(".box");


btn.onclick = function () {
    //함수의 인수로 객체를 받음
    animate(box, {
        prop: "opacity",
        value: 0,
        duration: 1000,
        callback: function () {
            alert("complate");
        }
    });
}

function animate(el, option) {
    const startTime = performance.now();
    let current_value;

    if (option.prop === "opacity") {
        current_value = parseFloat(getComputedStyle(el)[option.prop]);
    } else {
        current_value = parseInt(getComputedStyle(el)[option.prop]);
    }

    if (current_value == option.value) return;
    if (current_value < option.value) {
        requestAnimationFrame(run_plus);
    } else {
        requestAnimationFrame(run_minus);
    }

    function run_plus(time) {
        //진행율 계산
        let timeLast = time - startTime;
        let progress = timeLast / option.duration;

        if (progress < 0) progress = 0; //처음시작시 진행률 0으로고정
        if (progress > 1) progress = 1;//진행 완료시 진행률 1로고정
        if (progress < 1) {
            timer = requestAnimationFrame(run_plus);
        } else {
            cancelAnimationFrame(timer);
            if (option.callback) option.callback();
        }

        //진행률에따라 선택요소 css값을 변경
        let result = current_value + ((option.value - current_value) * progress);
        if (option.prop === "opacity") {
            el.style[option.prop] = result;

        } else {
            el.style[option.prop] = result + "px";
        }
    }

    function run_minus(time) {
        //진행율 계산
        let timeLast = time - startTime;
        let progress = timeLast / option.duration;

        if (progress < 0) progress = 0; //처음시작시 진행률 0으로고정
        if (progress > 1) progress = 1;//진행 완료시 진행률 1로고정
        if (progress < 1) {
            timer = requestAnimationFrame(run_minus);
        } else {
            cancelAnimationFrame(timer);
            if (option.callback) option.callback();
        }

        //진행률에따라 선택요소 css값을 변경
        let result = current_value - ((current_value - option.value) * progress);

        if (option.prop === "opacity") {
            el.style[option.prop] = result;

        } else {
            el.style[option.prop] = result + "px";
        }
    }

}
