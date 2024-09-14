const button=document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach((btn)=>{
btn.addEventListener("click", function(e){
console.log(e);

if(e.target.id == "yellow"){
    body.style.backgroundColor = "yellow";
}
if(e.target.id == "red"){
    body.style.backgroundColor = "red";
}
if(e.target.id == "green"){
    body.style.backgroundColor = "green";
}
if(e.target.id == "blue"){
    body.style.backgroundColor = "blue";
}


})
})
