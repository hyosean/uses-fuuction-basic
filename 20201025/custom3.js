const slider = document.querySelector("#slider");
const panel = slider.querySelector(".panel");
const panel_li = panel.querySelector("li");
const btns = slider.querySelector(".navi");
const btn = btns.querySelectorAll("li");
const btn_arr = Array.prototype.slice.call(btn);
console.log(btn_arr);


//click event
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        let panel_wid = parseInt(getComputedStyle(slider).width);

        animate(panel, {
            prop: "margin-left",
            value: -panel_wid * i,
            duration: 3000,
        });

    }
}

function animate(selector, option) {
    let startTime = performance.now();
    let cur_value = parseInt(getComputedStyle(selector)[option.prop]);

    //이동할 위치값이 현재 위치값보다 클때 증가시킴
    if (cur_value > option.value) {
        requestAnimationFrame(run_minus);
    }

    function run_minus(time) {
        let timeLast = time - startTime;
        console.log(timeLast);

        //현재까지 진행된 시간을 전체시간으로 나누면 0~1사이의 진행률 표시
        let progress = timeLast / option.duration;
        console.log("진행률:" + progress);//0부터 1까지 진행률

        if (progress < 1) {
            timer = requestAnimationFrame(run_minus);
        }

        selector.style[option.prop] = cur_value - ((cur_value - option.value) * progress) + "px";
    }
}



