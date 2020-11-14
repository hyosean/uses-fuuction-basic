function delay(time) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {

            Data(function (result) {
                if (result) {
                    resolve();
                } else {
                    reject();
                }
            });
        }, time);
    });
}

delay(3000)
    .then(function () {
        console.log("delay이후 실행할 함수");
    })
    .catch(function () {
        console.log("오류가 났을때 실행할 구문");
    })


/*
Promise
 : 특정함수 안에서 프로미스를 통해 인스턴스를 복사할때 받아지는 인수 리솔브를 내부에서 실행하고 리턴값을 내보내면 외부에서 동기적으로 동작하는 타임함수를 호출가능
*/