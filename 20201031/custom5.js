
const slider = document.querySelector(".slider");
const panel = slider.querySelector(".panel");
const panel_li = panel.querySelector(".panel li");
const btn = slider.querySelectorAll(".navi li")
//컬렉션을 배열로 변환
const btn_arr = Array.prototype.slice.call(btn) //어레이객체 프로토타입의 내장함수 슬라이스 call로 연결
//btn_arr [li.on , li , li]
let enableClick = true;

window.onresize = function () {
    let panel_wid = parseInt(getComputedStyle(slider).width);
    var active_item = btns.querySelector(".on");
    var active_index = btn_arr.indexOf(active_item);

    panel.style.left = -panel_wid * active_index + "px";
}

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        let panel_wid = parseInt(getComputedStyle(slider).width);
        let isOn = this.classList.contain("on");

        if (isOn) return;

        if (enableClick) {
            animate(panel, {
                prop: "margin-left",
                value: -panel_wid * i,
                duration: 1000,
                callback: function () {
                    activation(i, btn);
                }
            });
            enableClick = false;
        }

    }
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
            enableClick = true;
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
            enableClick = true;
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

function activation(activeNum, items) {
    for (var k = 0; k < items.length; k++) {
        items[k].className = "";
    }
    items[activeNum].classList.add("on");
}