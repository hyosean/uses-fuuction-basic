
// //배열forEach( callback, this );
// arr.forEach(function (item, index, self) {
//     console.log(item);
//     console.log(index);
//     console.log(self);
// });


const popup = document.querySelector(".popup");
const btnClose = popup.querySelector(".close");
const checkInput = popup.querySelector("input[type=checkbox]");
const btnDel = document.querySelector(".del");

//처음로딩시 쿠키가있으면 팝업을 숨김, 없으면 보임
console.log(document.cookie);
let cookiedata = document.cookie;

if (cookiedata.indexOf("today=done") < 0) {
    console.log("쿠키 없음");
} else {
    console.log("쿠키 있음");
}

//닫기 버튼클릭시 팝업을 닫는데 (체크했으면 쿠키 생성)
btnClose.onclick = function (e) {
    e.preventDefault();
    if (checkInput.checked) setCookie("today", "done", 1);
    animate(popup, {
        prop: "opacity",
        value: 0,
        duration: 500,
        callback: function () {
            popup.style.display = "none";
        }
    });
}

//쿠키삭제 버튼 클릭시 생성된 쿠키를 제거
btnClose.onclick = function (e) {
    e.preventDefault();
    setCookie("today", "done", 0);
    alert("쿠키가 삭제 되었습니다.");
}

//쿠키를 생성해주는 함수 정의
function setCookie(name, value, expireday) {
    let today = new Date();
    let duedate = today.getDate() + expireday;
    today.setDate(duedate);
    let result = today.toGMTString();
    // name=value; path=/; expires=해당쿠키 파기할 시간;
    //document.cookie = name + "="value"; path=/; expires" + result;
    document.cookie = `${name}=${value}; path=/; expires=${result}`;
}

// animate 함수
function animate(selector, option) {
    const startTime = performance.now();
    let current_value;

    if (option.prop === "opacity") {
        current_value = parseFloat(getComputedStyle(selector)[option.prop]);
    } else {
        current_value = parseInt(getComputedStyle(selector)[option.prop]);
    }


    if (current_value == option.value) return;
    if (current_value < option.value) {
        requestAnimationFrame(run_plus);
    } else {
        requestAnimationFrame(run_minus);
    }

    function run_plus(time) {
        let timeLast = time - startTime;
        let progress = timeLast / option.duration;

        if (progress < 0) progres = 0;
        if (progress > 1) progress = 1;
        if (progress < 1) {
            timer = requestAnimationFrame(run_plus);
        } else {
            cancelAnimationFrame(timer);
            if (option.callback) option.callback();
        }

        let result = current_value + ((option.value - current_value) * progress);

        if (option.prop === "opacity") {
            selector.style[option.prop] = result;
        } else {
            selector.style[option.prop] = result + "px";
        }
    }

    function run_minus(time) {
        let timeLast = time - startTime;
        let progress = timeLast / option.duration;

        if (progress < 0) progres = 0;
        if (progress > 1) progress = 1;
        if (progress < 1) {
            timer = requestAnimationFrame(run_minus);
        } else {
            cancelAnimationFrame(timer);
            if (option.callback) option.callback();
        }

        let result = current_value - ((current_value - option.value) * progress);

        if (option.prop === "opacity") {
            selector.style[option.prop] = result;
        } else {
            selector.style[option.prop] = result + "px";
        }
    }
}



