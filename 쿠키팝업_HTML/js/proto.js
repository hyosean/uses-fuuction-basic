function Cookiepop(selector, opt) {
    this.initDom(selector, opt);
    this.bindingEvent(selector, opt);
}

Cookiepop.prototype.initDom = function (selector, opt) {
    this.popup = document.querySelector(selector);
    this.btnClose = this.popup.querySelector(opt.btn);
    this.checkInput = this.popup.querySelector("input[type=checkbox]");
    this.btnDel = document.querySelector(".del");
}

Cookiepop.prototype.bindingEvent = function (selector, opt) {
    console.log(document.cookie);
    let cookiedata = document.cookie;

    if (cookiedata.indexOf("today=done") < 0) {
        console.log("쿠키 없음");
    } else {
        console.log("쿠키 있음");
    }

    //닫기 버튼클릭시 팝업을 닫는데 (체크했으면 쿠키 생성)
    this.btnClose.onclick = function (e) {
        e.preventDefault();
        if (this.checkInput.checked) setCookie("today", "done", 1);
        this.animate(this.popup, {
            prop: "opacity",
            value: 0,
            duration: 500,
            callback: function () {
                this.popup.style.display = "none";
            }.bind(this)
        });
    }

    //쿠키삭제 버튼 클릭시 생성된 쿠키를 제거
    this.btnClose.onclick = function (e) {
        e.preventDefault();
        this.setCookie("today", "done", 0);
        alert("쿠키가 삭제 되었습니다.");
    }.bind(this);
}

Cookiepop.prototype.setCookie = function (name, value, expireday) {
    let today = new Date();
    let duedate = today.getDate() + expireday;
    today.setDate(duedate);
    let result = today.toGMTString();
    document.cookie = `${name}=${value}; path=/; expires=${result}`;
}

Cookiepop.prototype.animate = function (selector, option) {
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
