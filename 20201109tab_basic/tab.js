//init DOM
var el = document.querySelector('#tab1');
var btns = el.querySelectorAll('ul>li');
var boxs = el.querySelectorAll('div');


//click event
for(var i=0; i<btns.length; i++){        
    (function(index){
        btns[index].onclick = function(e){
            e.preventDefault();

            activation(index, btns);
            activation(index, boxs);
        }
    })(i);  
}


//activate item
function activation(activeNum, items){ 
    for(var k=0; k<items.length; k++){
        items[k].className="";
    }
    items[activeNum].classList.add("on");
}

  
