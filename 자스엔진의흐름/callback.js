function delay(time, callback) {
    setTimeout(function () {
        callback();
    }, time);
}

console.log("start");

delay(1000, function () {
    console.log("callback1...");

    delay(1000, function () {
        console.log("callback2...");

        delay(1000, function () {
            console.log("callback3...");
            console.log("end");
        });
    });
});

/*
1. 콘솔 스타트 콜백 실행
2. 첫번째 딜레이 함수 콜스텍 실행
3. 첫번째 딜레이의 콜백함수인 셋타임아웃을 웹 api로 전달
4. 웹 api가 1초뒤에 콘솔과 두번째 딜레이를 쿼에 등록
5. 다시 콜스택에서 쿼 에 있는 콘솔과 두번째 딜레이를 콜스택에서 실행
6. 이하 반복
*/
