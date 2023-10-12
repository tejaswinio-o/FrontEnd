var btn = document.getElementById("btn");
var light = document.getElementById("light");
var video = document.getElementById("video");
       
function toggleBtn(){
    btn.classList.toggle("active");
    light.classList.toggle("on");
    video.classList.toggle("on");
}