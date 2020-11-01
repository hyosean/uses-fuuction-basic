window.onload = function(){
    var c1 = new FontStyle("title1");
    c1.changeColor("red");   
	c1.changeSize("50px");

    var c2 = new FontStyle("title2");
    c2.changeColor("pink");
    c2.changeSize("100px");

    var b1 = new BoxStyle("box1");
    b1.changeWidth("400px");
    b1.changeHeight("300px");
    b1.changeBg("lightgreen");

    b1.changeColor("red");
    b1.changeSize("80px");

    var b2 = new BoxStyle("box2");
    b2.changeWidth("300px");
    b2.changeFamily("airal");
    b2.changeSize("50px");
}


//폰트 스타일 관련 클래스
class FontStyle {
    constructor(el){
        this.el = el;
    }		

    changeColor(color){
        document.getElementById(this.el).style.color=color;
    }

    changeSize(size){
        document.getElementById(this.el).style.fontSize = size;
    }

    changeFamily(name){
        document.getElementById(this.el).style.fontFamily = name;
    }
	
	changeWeight(name){
		document.getElementById(this.el).style.fontWeight = name;
	}
}

//블록요소 형태관련 클래스
class BoxStyle extends FontStyle{
    constructor(el){
        super(el);
    }

    changeWidth(wid){
        document.getElementById(this.el).style.width=wid; 
    }

    changeHeight(ht){
        document.getElementById(this.el).style.height=ht; 
    }

    changeBg(bg){
        document.getElementById(this.el).style.backgroundColor=bg;
    }
}


	
	
		
	









	










