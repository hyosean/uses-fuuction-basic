const slider = document.querySelector("#slider");
const panel = slider.querySelector(".panel");
const panel_li = panel.querySelector("li");
const btns = slider.querySelector(".navi");
const btn = btns.querySelectorAll("li");
const btn_arr =  Array.prototype.slice.call(btn);
console.log(btn_arr);
let enableClick = true;

//resize event 
window.onresize = function(){
    let panel_wid = parseInt(getComputedStyle(slider).width);
    let active_item = btns.querySelector(".on");
    let active_index = btn_arr.indexOf(active_item);    
    panel.style.marginLeft= -panel_wid*active_index+"px";
}

//click event
for(let i=0; i<btn.length; i++){
    btn[i].onclick = function(){          
        let panel_wid = parseInt(getComputedStyle(slider).width);
        let isOn = this.classList.contains("on");

        if(isOn) return;       

        if(enableClick){
            animate(panel, {
                prop:"margin-left",
                value:-panel_wid*i,
                duration:1000,       
                callback:function(){
                    activation(i,btn);
                }     
            });
            enableClick = false;
        }
        
    }
}

function animate(selector, option){
    let cur_value = parseInt(getComputedStyle(selector)[option.prop]);    

    //이동할 위치값과 현재 위치값이 같으면 그냥 함수 종료
    if(cur_value == option.value) return;

    //이동할 위치값이 현재 위치값보다 클때 증가시킴
    if(cur_value < option.value){
        let interval = option.duration/(option.value-cur_value);

        timer = setInterval(function(){
            cur_value++;
            if(cur_value >= option.value){
                clearInterval(timer);
                cur_value = option.value;
                if(option.callback) option.callback();
                enableClick = true;
            }
            selector.style[option.prop] = cur_value+"px";
        },interval);

    //이동할 위치값이 현재 위치값보다 작을떄 감소시킴
    }else{
        let interval = option.duration/(cur_value-option.value);

        timer = setInterval(function(){
            cur_value--;
            if(cur_value <= option.value){
                clearInterval(timer);
                cur_value = option.value;
                if(option.callback) option.callback();
                enableClick = true;
            }
            selector.style[option.prop] = cur_value+"px";
        },interval);
    }
}

function activation(activeNum, items){ 
    for(let k=0; k<items.length; k++){
        items[k].className="";
    }
    items[activeNum].classList.add("on");
}