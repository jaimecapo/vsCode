const imgs = document.body.querySelectorAll(".gallery-photos-03-content > .gallery-photos-03-item img");
const ps = document.body.querySelectorAll(".gallery-photos-03-content > .gallery-photos-03-item p");

imgwidths = [];
imgheigths = [];
imgs.forEach(img => {
    imgwidths.push(img.clientWidth);
    imgheigths.push(img.clientHeight);
});

screenwidth=this.window.innerWidth;


imgs.forEach((element,key) => {
    firtwidth = element.clientWidth;
    tercio = screenwidth * 31 / 100
    if (element.clientWidth > tercio) {
        width = tercio;
        element.parentElement.style.width = width + "px";
        element.style.width = "100%";

        escalado = 100 * tercio / imgwidths[key];
        height = min * escalado / 100;
        element.parentElement.style.height = height + "px";
        element.style.height = '100%';
        ps[key].style.width = width + "px";

    }
});

imgwidths2 = [];
imgheigths2 = [];
imgs.forEach(img => {
    imgwidths2.push(img.clientWidth);
    imgheigths2.push(img.clientHeight);
});

var min = Math.min(...imgheigths2)

imgs.forEach((img,key) => {
    img.parentElement.style.height = min + "px";
    porcentaje = min * 100 / imgheigths2[key]
    width = imgwidths2[key] * porcentaje / 100;
    img.parentElement.style.width = width + "px";
});
imgwidths2 = [];
imgs.forEach(img => {
    imgwidths2.push(img.clientWidth);
});
window.addEventListener('resize', function() {
    imgs.forEach((img,key)=>{
        let a= 100 * img.clientWidth / this.screenwidth;
        porcentajeScreen = this.window.innerWidth * 100 / screenwidth;
        height = min * porcentajeScreen / 100;
        width = imgwidths2[key] * porcentajeScreen / 100;

        img.parentElement.style.width = width + "px";
        ps[key].style.width = width + "px";

        img.parentElement.style.height=height+"px";
        img.style.height='100%';
    });
    setptohighter();

});

setptohighter();

function setptohighter() {
    pheights = [];
    ps.forEach(p => {
        pheights.push(p.clientHeight);
    })
    var max = Math.max(...pheights);

    ps.forEach(p => {
        p.style.height = max + "px";
    })
}