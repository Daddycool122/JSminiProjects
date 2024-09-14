const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
};
let set;
const startChangingColor = function(){
    if(!set){
        set = setInterval(changeBGcolor,1000);
    }
    
    
    function changeBGcolor(){
        document.body.style.backgroundColor = randomColor();
    }
    
}
const stopChangingColor = function(){
    clearInterval(set)
    set = null
}

document.querySelector("#start").addEventListener("click",startChangingColor)
document.querySelector("#stop").addEventListener("click",stopChangingColor)