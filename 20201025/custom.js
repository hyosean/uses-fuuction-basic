let i = 0;

//함수를 콜백으로 받아야하는 함수
//requestAnimationFrame(run_plus);
run_plus(); //최초 1회실행

function run_plus(time) {
    i++;
    console.log(i);
    console.log(time);

    timer = requestAnimationFrame(run_plus);

    if (i >= 100) {
        cancelAnimationFrame(timer);
    }
}
