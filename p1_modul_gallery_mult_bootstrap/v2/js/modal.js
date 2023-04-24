const imgs= document.body.querySelectorAll('.photo > div');
const descs= document.body.querySelectorAll('.desc');

console.log(imgs);

imgs.forEach(img => {
    img.addEventListener("click",function(e){
        let target=img.parentElement;
        console.log(target);
        target.className="photo_target";
        let btn=target.querySelector("button");
        btn.addEventListener("click",function(e){
            target.className="photo col-sm-3";
        });
    })
});

descs.forEach(desc => {
    desc.addEventListener("click",function(e){
        let target=desc.parentElement;
        target.className="photo_target";
        let btn=target.querySelector("button");
        btn.addEventListener("click",function(e){
            target.className="photo col-sm-3";
        });
    })
});
