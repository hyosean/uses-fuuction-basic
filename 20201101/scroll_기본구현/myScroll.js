var sec = document.querySelectorAll("section");
var sec_arr = Array.prototype.slice.call(sec);
var btn = document.querySelectorAll("ul li");
var len = sec.length;
var enableClick = true;
var offs = [];
var baseLine = -300;

setPos();
console.log(offs);

//click event
for(var i=0; i<len; i++){
    (function(index){
        btn[index].onclick = function(){  

            var isOn = this.classList.contains("on");
            if(isOn) return;

            if(enableClick){
                animate(window,{
                    prop : "scroll",
                    value : offs[index],
                    duration : 500
                });

                enableClick = false;
            }
            
        }
    })(i);
}

//scroll event
window.onscroll = function(){
    var scroll = window.scrollY || window.pageYOffset;
    var activeNum = 0;

    offs.forEach(function(item, index){
        if(scroll >= item+baseLine) activeNum = index;
    });

    activation(activeNum, btn);
    activation(activeNum, sec);
}

function setPos(){
    sec_arr.forEach(function(item, index, array){
        offs.push(item.offsetTop);
    });
    offs.push(sec_arr[len-1].offsetTop + sec_arr[len-1].offsetHeight);
}


function animate(selector, option){           
    const startTime = performance.now();    
    let current_value;          
    const self = this;
    
    if(option.prop === "opacity") {
        current_value = parseFloat( getComputedStyle(selector)[option.prop] );
    } else if(option.prop === "scroll"){          
        current_value = parseInt( window.scrollY || window.pageYOffset );
    }else{
        current_value = parseInt( getComputedStyle(selector)[option.prop] );
    }   
    
    if(current_value == option.value) return;
    if(current_value < option.value) {
        requestAnimationFrame(run_plus);
    } else {
        requestAnimationFrame(run_minus);
    }  
    
    
    function run_plus(time){   
        let timeLast = time - startTime;      
        let progress = timeLast / option.duration;
        let timer;   
        
        if (progress < 0) progress = 0; 
        if (progress > 1) progress = 1;      
    
        if (progress < 1){
            timer = requestAnimationFrame(run_plus); 
        } else {
            cancelAnimationFrame(timer);   
            if (option.callback) option.callback();             
            enableClick = true;            
        }   

        let result =  current_value + ( (option.value - current_value) * progress);    
        
        if (option.prop === "opacity"){
            selector.style[option.prop] = result;
        } else if(option.prop === "scroll"){
            window.scroll(0,result);
        } else {               
            selector.style[option.prop] = result+"px";
        }  
    }  

    function run_minus(time){     
        let timeLast = time - startTime;      
        let progress = timeLast / option.duration;      
        let timer;
        
        if (progress < 0) progress = 0; 
        if (progress > 1) progress = 1;      
        
        if (progress < 1){
            timer = requestAnimationFrame(run_minus); 
        } else {
            cancelAnimationFrame(timer);              
            if (option.callback) option.callback();
            enableClick = true;            
        }         

        let result =  current_value - ( (current_value - option.value) * progress);    

        
        if (option.prop === "opacity"){
            selector.style[option.prop] = result;
        } else if(option.prop === "scroll"){
            window.scroll(0,result);
        } else {               
            selector.style[option.prop] = result+"px";
        }  
        
    }
}

function activation(activeNum, items){ 
    for(let k=0; k<items.length; k++){
        items[k].className="";
    }
    items[activeNum].classList.add("on");
}