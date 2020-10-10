/*
특정시간동안 딜레이시켜주는 내장함수
setToimeout(함수명, 딜레이시간); //브라우져기능을 가져다쓴다

setTimeout(function() {

},1000);

전체 문자열을 특정문자열 기준으로 분할해서 배열로 반환하는 내장함수

전체문자열.split("기준문자");

외부 stylesheet 에 연결되있는 css구문 불러오기 
 //html에만 접근가능한 자바스크립트지만 css를 불러오는 윈도우 내장객체
getComputedStyle(요소명).스타일명

문자를 숫자로 변환하는 내장 함수
parseInt() -정수 변환 -> .뒤로 다없앰
parseFloat() -실수 변환 -> .포함 숫자다 반환
*/

var fruita = "apple,banana";
var fruitArray = fruita.split(",");//콤마를 기준으로 문자열이 분할되어 배열에 반환
//문자열 안에서 뛰어쓰기도 문자
var fruit = "apple banana mango";
var fruitArr = fruit.split(" ");
console.log(fruitArr);

var btn = document.getElementsByClassName('btn')[0];
var box = document.getElementsByClassName('box')[0];
//console.log(getComputedStyle(box).transitionDelay) //윈도우기준
var ts = getComputedStyle(box).transitionDelay;
console.log(ts);//문자열 값이찍힘
ts = ts.split("s")[0];
console.log(ts);//문자열을 s 를기준으로 분할하여 배열에담음
ts = parseFloat(ts)*1000;
console.log(ts);//문자열을 실수로 변환 하며 1000을곱함 값을 담음

speed(box);

btn.onclick = function() {
    setTimeout(function() {
      alert('motion complete');
    },speed(box));//트렌지션 동작이 끝나고 난뒤 호출
    box.classList.add('on');
}

function speed(domi) {
    var speed= getComputedStyle(domi).transitionDuration
    speed = parseFloat(speed.split("s")[0])*1000;
    return speed;
}

