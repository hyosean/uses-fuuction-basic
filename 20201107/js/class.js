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
class Validate {
    constructor(selector, option) {
        this.initDom(selector, option);
        this.bindingEvent();
    }

    initDom(selector, option) {
        this.form = document.querySelector('#join');
        this.btnSend = this.form.querySelector('input[type=submit]');
        this.items = ['userid', 'pwd', 'email', 'hobby', 'gender', 'comments'];
        this.len = items.length;
        this.i = 0;
        this.isValid = false;
    }

    bindingEvent() {
        let self = this; //인스턴스를 지역변수 셀프에 옴겨담음

        self.btnSend.onclick = function (e) {
            self.validate(self.form, self.items);
            if (!self.isValid) {
                self.i = 0;
                e.preventDefault();
            }
        }
    }

    validate(selector, arr) {
        let self = this;
        arr.forEach(function (item) {
            let result = selector[item];
            console.log(result);

            if (result.length) {
                let isChecked = false;

                result.forEach(function (item) {
                    if (item.checked) isChecked = true;
                });

                if (isChecked) {
                    self.i++
                    result[0].parentNode.classList.remove('error');
                } else {
                    result[0].parentNode.classList.add('error');
                }
            } else {
                if (result.value) {
                    self.i++;
                    result.parentNode.classList.remove('error');
                } else {
                    result.parentNode.classList.add('error');
                }
            }

            if (self.i == self.len) {
                self.isValid = true;
            } else {
                self.isValid = false;
            }
        });
    }
}
