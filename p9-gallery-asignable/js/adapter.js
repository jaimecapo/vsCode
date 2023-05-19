const row= document.body.querySelector(".gallery");
const imgs= document.body.querySelectorAll(".gallery-content > div img");

imgs.forEach(img=>{
    img.onload=function(){

        if(img.clientWidth >row.clientWidth/2){
            img.style.width='100%';
            img.parentElement.style.width='50%';
        } 
    };
})