class MyScroll {

    constructor(props){
        this.initDOM(props);
        this.setPos();
        this.bindingEvent(props);
    }

    initDOM(props){
        this.btn = document.querySelectorAll(props.btns);
        this.sec = document.querySelectorAll(props.boxs);
        this.sec_arr = Array.prototype.slice.call(this.sec); 
        this.len = this.sec_arr.length;
        this.enableClick = true;
        this.offs =[];
        this.custom = props.baseLine;      
    }

    setPos(){      
        this.sec_arr.map((item, index) => {  
            this.offs.push(item.offsetTop);
        });
        this.offs.push(this.sec_arr[this.len-1].offsetTop + this.sec_arr[this.len-1].offsetHeight); 
    }
    

    bindingEvent(props){    
        //btn event
        for(let i=0; i<this.btn.length; i++){
    
            this.btn[i].onclick = () => {   

                let isOn = this.btn[i].classList.contains("on");

                if(isOn) return;
                if(this.enableClick){                    
                    this.animate(window,{
                        prop : "scroll",
                        value : this.offs[i],
                        duration: props.speed,           
                    });   
        
                    this.enableClick = false;
                }         
            }  
        }
    
        //scroll event
        window.onscroll = () => {    
            let scroll = window.scrollY || window.pageYOffset;
            let activeNum=0;
    
            this.offs.map((item,index) => {   
                if(scroll >= item+this.custom) activeNum = index; 
            });    
            
            this.activation(activeNum, this.btn);            
        }
    }




    animate(selector, option){           
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
                self.enableClick = true;            
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
                self.enableClick = true;            
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

    activation(activeNum, items){ 
        for(let k=0; k<items.length; k++){
            items[k].className="";
        }
        items[activeNum].classList.add("on");
    }
}
