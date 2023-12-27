let menubox = document.getElementById("menubox")
let responnav = document.getElementById("responnav")
let responav = document.getElementById("responav")
let navchild = Array.from(responav.children)

menubox.addEventListener("click",()=>{
    responnav.classList.toggle("block")
})

navchild.forEach((e)=>{
    e.addEventListener("click",()=>{
        responnav.classList.remove("block")
    })
})
