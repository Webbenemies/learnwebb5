console.log("complete html");
let rocket = document.getElementById("rocket")
let bg = document.getElementById("bg")
window.addEventListener("scroll",(e)=>{
let scroll = Math.floor(window.scrollY)
if(scroll<=650){
    console.log(scroll);
    rocket.style.left = scroll*4+"px"
    rocket.style.bottom = scroll*1.2+"px"
}
})
