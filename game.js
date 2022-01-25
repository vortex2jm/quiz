
function flyback(){
    let overbox = document.querySelector("#overbox");
    overbox.style.animationName = "flyBack";
    overbox.style.animationDuration = '3.33s';
    console.log('set rocket position');
}
setTimeout(flyback, 10000);

