const panel = document.querySelector(".panel");
const btn = document.querySelector(".navi li");

/*
1. 전체시간 값을 알고있을때
2. requestAnimationFrame 이 콜백을 호출할때마다
3. 해당 누적시간을 인수 time으로 전달해줌
4. 누적시간 time에서 이벤트가 처음 발생한 순간의 시간을 빼면 
5. 이벤트발생한 순간부터 모션완료된 순간까지의 시간을 계산가능
6. 누적시간 전체시간으로 나누면 모션시작부터 끝까지 진행률 계산가능
7. 진행률 은 (0~1까지의 실수) (0은 시작 0.5는중간 1은 끝)
8. 결국 진행률은 value값과 아무런 연관이 없음
9. 중요한 것은 총시간(duration) 과 사이클당 누적시간인 인수(time)
*/

//click event
btn.onclick = function () {
    animate(panel, {
        prop: "left",
        value: 200,
        duration: 300,
    });

    animate(panel, {
        prop: "opacity",
        value: 1,
        duration: 2000
    });

}

function animate(selector, option) {
    let startTime = performance.now();

    requestAnimationFrame(run_plus);

    function run_plus(time) {
        let timeLast = time - startTime;
        console.log(timeLast);

        //현재까지 진행된 시간을 전체시간으로 나누면 0~1사이의 진행률 표시
        let progress = timeLast / option.duration;
        console.log("진행률:" + progress);//0부터 1까지 진행률

        if (progress < 1) {
            timer = requestAnimationFrame(run_plus);
        }
        selector.style[option.prop] = 0 + (option.value * progress) + "px";

        if (option.prop === "opacity") {
            selector.style[option.prop] = 0 + (option.value * progress);
        } else {
            selector.style[option.prop] = 0 + (option.value * progress) + "px";
        }

    }
}



