const btnMake = document.querySelector(".make");
const btnDel = document.querySelector(".delete");
const btnView = document.querySelector(".view");

// name=value; path=/; expires=해당쿠키 파기할 시간;

btnMake.onclick = function () {
    let today = new Date();
    let current_sec = today.getSeconds();
    today.setSeconds(current_sec + 60);
    document.cookie = "name=value; path=/; expires=" + today.GMTString();
}
btnDel.onclick = function () {
    let now = new Date();
    document.cookie = "name=value; path=/; expires=" + now.GMTString();
}

btnView.onclick = function () {

}