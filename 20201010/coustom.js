
var num1 = 3;
var num2 = 5;
/*
함수는 반복되는 계산식을
블록단위로 묵어서 저장해놓은 구문의 그룹

함수를 쓰는 이유
- 특정 기능들을 그룹화해서 재사용하기 위함

함수의 형태

 * 선언적 함수 -> 값이 먼저읽힘으로 먼저 선언하고 하단에배치한 후 이벤트 연결객채를 상위로 배치 //어떤 기능인지 가독성up

- function 함수이름(매개변수) {
    실행 코드
}

 * 익명함수
- var 변수명 = function() { }
- var 변수명 = () => { }

함수 실행 방법
- 정의된 함수를 호출
    함수명();

return
- 기본적으로 함수 호출이 되고나면 함수내부에서 만들어진 값은 사라짐
- return 을 이용하면 함수 호출후 특정값 반환가능
- 함수 중간에 return 문을 만나면 함수가 강제 종료 
*/

//var plus = () => console.log(num1+num2);
//plus();

plus(5,4); //선언적 함수 이기때문에 현재 배치정리 가능
plus(6,7); //매개변수 활용으로 재사용가능한 함수

function plus(num1,num2) {
    var result = num1+num2;
    console.log(result);
    return result;
}
var total = plus(2,3);
console.log(total);
//변수의 스코프로인한 한계(함수를 벗어나면 값이사라짐)를 
//함수내부 변수값을 return키워드를 이용해 호출된 곳으로 반환 


/*
ative(lis);

function ative(array) {
    for(var i=0;i<array.length;i++) {

        array[i].onclick = function() {
    
            for(var k=0;k<array.length;k++) {
                array[k].className = '';
            }
    
            this.classList.add('on');
        }
    }
}
*/
var lis = document.getElementsByTagName('li');//이벤트 처리될 객체를 불러옴

for(var i=0;i<lis.length;i++) {
    lis[i].onclick = function() {

        ative(this, lis);
    }
}// 이벤트 구문 


function ative(item, item2) {
    for(var k=0;k<item2.length;k++) {
        item2[k].className = '';
    }

    item.classList.add('on');
}// 기능 함수 구문

