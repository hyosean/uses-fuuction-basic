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

async function test() {
    await delay(3000);
    console.log("async");
}

test();

/*
async
 : 함수 앞에 붙이면 해당 함수는 자동으로 프로미스 인스턴스를 리턴해서 뒤에 나오는 함수에 await적용 가능케함

 await
 : async함수 내부에서 특정 구문에 await를 붙여서 해당 함수가 끝나야지 다음구문이 실행되게 동기처리
*/