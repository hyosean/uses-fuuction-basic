const slider = document.querySelector("#slider");
const panel = slider.querySelector(".panel");
const panel_li = panel.querySelector("li");
const btns = slider.querySelector(".navi");
const btn = btns.querySelector("li");

btn.onclick = function(){    
    animate(panel_li, {
        prop:"margin-left",
        value:400,
        duration:1000,       
        callback:function(){
            console.log("Motion Completed!!!");
        }     
    });
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
            }
            selector.style[option.prop] = cur_value+"px";
        },interval);
    }
}