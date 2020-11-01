/*
  constructor(생성자함수), prototype(프로토타입)을 활용한 객체지향 프로그래밍

  생성자함수 (통칭 es5버전에서의 클래스)
  - 어떤 반복적인 대량의 결과물을 뽑아내기 위한 시스템적인 틀 (붕어빨을 찍어내기 위한 붕어빵틀

  인스턴스, 객체
  -생성자 함수를 통해서 복사된 실제적인 결과물, 복사본 (붕어빵틀을 통해서 찍어낸 개별 붕어빵)
  
  프로토타입
  -생성자함수 생성시 만들어지는 저장공간
  -동일한 생성자함수를 통해 복사된 인스턴스들은 동일한 프로토타입을 공유한다
  -보통 자주쓰는 함수(메소드)의 원형을 프로토타입에 저장하여 추후 모든 인스턴스들이 공유하도록 함
*/


/* 생성자 함수로 인스턴스 생성하는 법
 1.new 연산자를 이용하여 인스턴스를 생성하는 함수, 무조건 제일먼저 실행될 함수 (생성자함수)
 --> 호출될때 받은 인자값을 인스턴스로 전달해줌(this를 이용해서 전달)
 --> 생성자함수 전용의 공간인 prototype을 생성 (모든 인스턴스는 prototype에 저장된 값을 공유)
 --> 공통으로 쓰이게 될 값이나 함수(메소드)들은 무조건 prototype에 저장시킴
*/
 

function FontStyle(el, color, size){
  this.el = el;
  this.changeColor(color);
  this.changeSize(size);
}

FontStyle.prototype.changeColor = function(color){
  document.getElementById(this.el).style.color=color;
}
FontStyle.prototype.changeSize = function(size){
  document.getElementById(this.el).style.fontSize=size;
}

window.onload = function(){
  var c1 = new FontStyle("title1","blue","50px");
  var c2 = new FontStyle("title2","green","100px");
  /*
  var c1 = new FontStyle("title1");
  c1.changeColor("blue");
  c1.changeSize("50px");
  var c2 = new FontStyle("title2");
  c2.changeColor("red");
  c2.changeSize("100px");
  */
}