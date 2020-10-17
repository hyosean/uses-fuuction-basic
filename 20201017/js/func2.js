const btn = document.querySelector(".btn");
const box = document.querySelector(".box");
const dur = 3000;
const target_pos = 700;


//let time = getComputedStyle(box).marginLeft;

//요청 사항 top 700px 3초 

btn.onclick = function () {
    animate(box, {
        prop: "margin-top",
        value: 700,
        duration: 3000
    });
}

function animate(selector, option) {

    let time = parseInt(getComputedStyle(selector)[option.prop]);
    let interval = dur / (option.value - time);

    timer = setInterval(() => {
        time++;

        if (time >= option.value) {
            clearInterval(timer);
            time = option.value;
        }
        box.style.marginTop = time + "px";
    }, interval);
}

/*
바뀌는 특정 요소의 수치값을 알고 있고
전체 동작되야 되는 총시간 알고 있으면

반복시간 * 수치값 = 총시간

반복시간 = 총시간 / 변화될 수치값
*/





