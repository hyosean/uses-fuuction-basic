/*
  객체 -- "key":"value"를 이용하여 배열에 비해 구조적으로 데이터를 관리  
*/

var obj = {
  name:"홍길동", 
  age:20, 
  introduce:function(){
    return "제 이름은 "+this.name+"이고 나이는 "+this.age+"살 입니다.";
  }
}

console.log(obj.name);
console.log(obj.age);
console.log(obj.introduce);

obj.name="김영희";
obj.age=24;
console.log(obj.name);
console.log(obj.age);
console.log(obj.introduce());