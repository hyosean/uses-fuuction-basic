/*
배열
- 장점 : 여러개의 데이터를 한번에 그룹으로 관리가능
- 단점 : 순번으로 데이터를 순회하기 때문에 정밀한 타겟팅 불가능

객체
- 장점 : key가 있어서 데이터를 정밀하게 타겟팅 가능
- 단점 : 연속성 있는 여러개의 데이터를 묶을 수 없음

json
- 각각의 객체를 배열형태로 모아놓은 자료형태
*/

fetch("data.json")
    .then(function (data) {
        console.log(data.json());
        let result = data.json();
        console.log(result);
    })
    .then(function (json) {
        return new Promise(function (resolve, reject) {
            if (json) {
                resolve(json);
            } else {
                reject();
            }
        })
    })
    .catch(function (err) {
        //console.error(err);
        console.error("데이터 호출에 문제가 있습니다");
    })
    .then(function (result) {
        console.log(result);
        createDOM(result);
    });

//data호출 함수 정의
function fetchData(url) {
    return fetch(url)

}
//DOM생성함수 정의
function createDOM(data) {
    let result = data;
}