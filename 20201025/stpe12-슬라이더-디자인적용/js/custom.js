var frame = document.querySelector("#slider");
var circle = document.querySelector("#circle");
var panel = slider.querySelector(".panel");
var panel_li = panel.querySelectorAll("li");
var btns = slider.querySelector(".navi");
var btn = btns.querySelectorAll("li");
var btn_arr =  Array.prototype.slice.call(btn); 
var speed = 1000;
var enableClick = true;

//resize event
window.onresize = function(){    
    var panel_wid = parseInt(getComputedStyle(slider).width);
    var active_item = btns.querySelector(".on");
    var active_index = btn_arr.indexOf(active_item);       
  
    panel.style.left= -panel_wid*active_index+"px";
}

//click event
for(var i=0; i<btn.length; i++){

    (function(index){
        btn[index].onclick = function(){ 
            var panel_wid = parseInt(getComputedStyle(slider).width);
            var isOn = this.classList.contains("on");
           
            if(isOn) return;       
    
            if(enableClick){
                animate(panel, {
                    prop:"left",
                    value:-panel_wid*index,
                    duration:speed,       
                    callback:function(){
                        activation(index,btn);
                        activation(index,panel_li);
                    }     
                });
    
                ring(index);
    
                enableClick = false;
            }        
        }
    })(i);
  
    

}


function animate(selector, option){  
    const startTime = performance.now();    
    let current_value;
    
    if(option.prop === "opacity") {
        current_value = parseFloat( getComputedStyle(selector)[option.prop] );
    }else{
        current_value = parseInt( getComputedStyle(selector)[option.prop] );
    }    


    if(current_value == option.value) return;

    if(current_value < option.value) {
        timer = requestAnimationFrame(run_plus);
    } else {
        timer = requestAnimationFrame(run_minus);
    }    
    

    function run_plus(time){     
        var timeLast = time - startTime;      
        var progress = timeLast / option.duration;      
        
        if (progress < 0) progress = 0; 
        if (progress > 1) progress = 1;      
    
        if (progress < 1){
            timer = requestAnimationFrame(run_plus); 
        } else {
            cancelAnimationFrame(timer);    
            if (option.callback) option.callback();
            enableClick = true;
        }       

        var result =  current_value + ( (option.value - current_value) * progress);    

        
        if (option.prop === "opacity"){
            selector.style[option.prop] = result;
        } else {               
            selector.style[option.prop] = result+"px";
        }        
        
    }


    function run_minus(time){     
        var timeLast = time - startTime;      
        var progress = timeLast / option.duration;      
        
        if (progress < 0) progress = 0; 
        if (progress > 1) progress = 1;      
    
        if (progress < 1){
            timer = requestAnimationFrame(run_minus); 
        } else {
            cancelAnimationFrame(timer);  
            if (option.callback) option.callback();
            enableClick = true;
        } 
        
        var result =  current_value - ( (current_value - option.value) * progress);      
        
        
        if (option.prop === "opacity"){
            selector.style[option.prop] = result;
        } else {
            selector.style[option.prop] = result+"px";
        }
       
    }
}

function activation(activeNum, items){ 
    for(var k=0; k<items.length; k++){
        items[k].className="";
    }
    items[activeNum].classList.add("on");
}

function ring(activeNum){
    circle.className="";
    circle.classList.add("rot"+activeNum);
}



    