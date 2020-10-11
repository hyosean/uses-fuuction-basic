//이벤트 처리될 객체를 불러옴
/*
for(var i=0;i<lis.length;i++) {
    lis[i].onclick = function() {

        (function(idx) {
            ative(lis[idx], lis);
        })(i);
    }
}//즉시 실행함수 : 내부i값의 호이스팅 방지
//보통 이벤트구문을 감싸줌
*/

/*
에크마6 변수 
let : 호이스팅을 막아주는 변수
const : 한번선언하면 변경불가 변수 ex)dom을 담는 변수등

조건문 : 조건에 따른 분기처리
if(조건식1) { }

제이쿼리 hasclass 특정클래스 존재확인 , toggleclass 이벤트시 클래스 토글

선택자.classList.contains("클래스명") : 특정클래스 존재확인
- 선택자에 해당 클래스명이 있으면 참 반환

*/
let lis = document.querySelectorAll(".tab ul li");
let boxs = document.querySelectorAll(".tab .boxs div");
let p = document.querySelector(".tab .boxs div p");
let time = speed(p);

//버튼을 클릭할때 마다 클릭한 버튼이 활성화 되어있는지 체크하기 위한 전역변수
let isOn = true ;
let enableClick = true;

for(let i=0;i<lis.length;i++) {
    lis[i].onclick = function() {
        isOn = this.classList.contains("on");

        //내가 클릭한 버튼이 활성화 되있지 않아야 실행
        if(!isOn && enableClick) {
            ative(i, lis);
            ative(i, boxs);
            enableClick = false;
        }
    }
}

function ative(ative, item) {
    for(let k=0;k<item.length;k++) {
        item[k].className = '';
    }

    item[ative].classList.add('on');

    //재클릭 방지 시스템
    setTimeout(function() { 
        enableClick = true;
    },time);//트렌지션 동작이 끝나고 난뒤 호출
}// 기능 함수 구문

function speed(dom) {
    let speed = getComputedStyle(dom).transitionDuration;
    console.log(speed);
    speed = parseFloat(speed.split("s")[0])*1000;
    return speed;
}

