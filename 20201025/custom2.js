let i = 0;
let btn = document.querySelector("button");
let start, end;

btn.onclick = function () {
    start = performance.now();
    run_plus();
}

function run_plus(time) {
    i++;
    console.log(i);

    let timeLast = time - start;
    console.log(timeLast);

    timer = requestAnimationFrame(run_plus);

    //브라우져 로딩 이후 바로 카운트적용
    // 클릭이벤트 시간대비 인터벌

    if (i >= 100) {
        cancelAnimationFrame(timer);
        end = performance.now();
        console.log(end - start);
    }

}
