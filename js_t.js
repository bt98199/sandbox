document.getElementById("blueBtn").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = 'blue';

});

document.getElementById("growBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

document.getElementById("resetBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px",
    document.getElementById("box").style.backgroundColor = 'orange',
    document.getElementById("box").style.opacity ="1",
    document.getElementById("myImage").style.width="0px",
    document.getElementById("myAudio").pause()
    document.getElementById("myImage2").style.width="0px";

});
document.getElementById("fadeBtn").addEventListener("click", function(){

    document.getElementById("box").style.opacity ="0.5";

});
document.getElementById("astleyBtn").addEventListener("click", function(){

    document.getElementById("myImage").style.width="200px";

});
document.getElementById("neverBtn").addEventListener("click", function(){

    document.getElementById("myAudio").play();

});
document.getElementById("danceBtn").addEventListener("click", function(){

    document.getElementById("myImage2").style.width="400px",
    document.getElementById("myAudio").play();

});