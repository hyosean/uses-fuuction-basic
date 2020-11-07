/*
플토타입 객체지향 변환 순서
1. 전역변수/ 이벤트연결 / 함수정의부로 분리
2. 생성자 함수 정의 후 생성자의 프로토타입메서드 등록
3. 기본연결할 메서드 2개 추가 initDom / bindingEvent
4. 이닛돔에는 전역변수 값을 this객체로 넘겨주는 코드 삽입
5. 바인딩에벤트에는 this로 넘긴 돔을 다시불러와서 이벤트 연결코드삽입
6. 나머지 함수들은 그냥 프로토타입에 등록
7. 특히 바인딩이벤트 안쪽에서 인스턴스this와 이벤트 발생객체 this의 충돌을 피하기위해서 인스턴스 this --> 지역변수 self 에 옮겨담음
*/
const form = document.querySelector('#join');
const btnSend = form.querySelector('input[type=submit]');
const items = ['userid', 'pwd', 'email', 'hobby', 'gender', 'comments'];
const len = items.length;
let i = 0;
let isValid = false;

btnSend.onclick = function (e) {

    validate(form, items, i);
    if (!isValid) {
        i = 0;
        e.preventDefault();
    }
}

//인증함수정의
function validate(selector, arr) {

    //체크할 메인 항목의 갯수만큼 반복을 돌면서 인증시작 
    arr.forEach(function (item) {
        let result = selector[item];
        console.log(result);

        //복수개의 네임값일때
        if (result.length) {
            let isChecked = false;

            //반복을 돌면서 하나라도 체크된것이 있으면 첵키드값저장
            result.forEach(function (item) {
                if (item.checked) isChecked = true;
            });

            //체크된게 있으면 부모td에 에러클래스지우고 i값증가
            //만약 없으면 에러클래스 추가 
            if (isChecked) {
                i++
                result[0].parentNode.classList.remove('error');
            } else {
                result[0].parentNode.classList.add('error');
            }
        } else {
            //단수개의 네임값일때

            if (result.value) {
                i++;
                result.parentNode.classList.remove('error');
            } else {
                result.parentNode.classList.add('error');
            }
        }

        if (i == len) {
            isValid = true;
        } else {
            isValid = false;
        }
    });
    console.log(i);

}