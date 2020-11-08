class Validate {

    constructor(selector, option) {
        this.initDOM(selector, option);
        this.bindingEvent();
    }

    initDOM(selector, option) {
        this.join = document.querySelector(selector);
        this.btnSend = this.join.querySelector("input[type=submit]");
        this.items = option.items;
        this.len = this.items.length;
        this.i = 0;
        this.isValid = false;
    }

    bindingEvent() {

        this.btnSend.onclick = function (e) {

            this.validate(this.join, this.items);

            console.log(this.isValid);
            if (!this.isValid) {
                this.i = 0;
                //return false;
                e.preventDefault();
            }
        }.bind(this);
    }

    validate(form, arr) {

        this.

            arr.forEach(function (item) {
                let result = form[item];

                if (result.length) {

                    let isChecked = false;


                    result.forEach(function (item) {
                        if (item.checked) isChecked = true;
                    });

                    //체크된게 있으면 부모 td에 error클래스를 지우고 i값 증가
                    //체크된게 없으면 부모 td에 error클래스를 추가하고 i값 증가하지 않음
                    if (isChecked) {
                        this.i++;
                        result[0].parentNode.classList.remove("error");
                    } else {
                        result[0].parentNode.classList.add("error");
                    }

                    //단수의 name값일떄
                } else {
                    //해당 인풋에 값이 있으면 error클래스를 지우고 i값 증가
                    //해당 인풋에 값이 없으면 error클래스 추가하고 i값 증가하지 않음
                    if (result.value) {
                        if (result.type == "password") {
                            let pwd = result.value;

                            let num = /[0-9]/;
                            let eng = /[a-zA-Z]/;
                            let spc = /[!@#$%^&*()_+{}<>?:;]/;

                            //특수문자 숫자 영어 조건을 통과하면 첫번째 비번인증 통과하고 i값 증가
                            //this.pwd_arr 
                            if (num.test(pwd) && eng.test(eng) && spc.test(spc)) {
                                this.i++;
                                result.parentNode.classList.remove("error");
                            } else {
                                console.log("비밀번호에 특수문자와 영문,숫자를 모두 포함하세요");
                                result.parentNode.classList.add("error");
                            }
                            this.pwd_arr.push(pwd);
                            //비밀번호 배열에 2개의값이 저장되면 바로인증되는걸 막기위해
                            //i값에서 1을 다시빼줌이후 각배열에 담긴 두개의 값이같은지 비교후 같으면 다시1을증가
                            if (this.pwd_arr.length == 2) {
                                this.i--;
                            }
                        } else {
                            this.i++;
                            result.parentNode.classList.remove("error");
                        }
                        this.i++;
                        result.parentNode.classList.remove("error");
                    } else {
                        result.parentNode.classList.add("error");
                    }
                }

                //배열의 체크할 항목 갯수와 i값이 동일하면 isValid에 true저장
                //그렇지 않으면 isValid에 false저장
                if (this.i == self.len) {
                    this.isValid = true;
                } else {
                    this.isValid = false;
                }

            }.bind(this));

        console.log(this.i);
    }

}





