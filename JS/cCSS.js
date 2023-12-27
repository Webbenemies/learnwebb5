console.log("cCSS");

const navlink = [
    {
        lable: "CSS PROTO",
        ahref:[
            {atext:"WHAT IS CSS", address:"../CCSS/home-css.html"},
            {atext:"THE FUNDAMENTALS", address:"../CCSS/CSS-Syntax.html"},
            {atext:"HTML + CSS", address:"../CCSS/CSS-HTML-Fusion.html"},
            {atext:"CSS COLORS", address:"../CCSS/css-colors.html"},
            {atext:"CSS BACKGROUND", address:"../CCSS/css-background.html"},
            {atext:"CSS TEXT PROPERTYS", address:"../CCSS/css-text-property.html"},
            {atext:"CSS BOX MODEL", address:"../CCSS/css-box-model.html"},
            {atext:"CSS PADDING", address:"../CCSS/css-padding.html"},
            {atext:"CSS BORDER", address:"../CCSS/css-border.html"},
            {atext:"WHAT IS CSS", address:"../CCSS/sample.html"},

        ]
    },

]
let sidenav = document.getElementById("sidenav")

navlink.forEach((e)=>{
    let navbox = document.createElement("div")
    navbox.className = "navbox";
    let lablee = document.createElement("h5")
    lablee.className = "navlab";
    lablee.innerText = e.lable.trim()
    sidenav.appendChild(navbox).appendChild(lablee)
    
    e.ahref.forEach((a)=>{
        let link = document.createElement("a")
        link.className = "linka"
        link.innerHTML = a.atext.trim() + "<br>"
        link.href = a.address
        navbox.appendChild(link)
    })
})

let page = window.location.pathname
let loction = Array.from(document.querySelectorAll(".linka"))
// console.log(loction);

loction.forEach((n)=>{
    if(n.href.includes(`${page}`)){
        n.classList.add("act")
    }
})


let runbtn = Array.from(document.querySelectorAll(".codebtn"))

runbtn.forEach((e)=>{
    e.addEventListener("click",(r)=>{
       let parent = r.target.parentNode
       let child = Array.from(parent.children)

       let code = child[0].value
       let frame = child[2]
       
       
       if (frame.style.display == "block") {
           frame.style.display = "none"
           r.target.innerText = "see output"
        } else {
            frame.style.display = "block"
            frame.srcdoc =code;
            r.target.innerText = "close output"
        }
        child[0].addEventListener("keyup",()=>{
            let keycode = child[0].value
            frame.srcdoc =keycode;
            // frame.contentDocument.body.innerHTML =keycode;
        })
    })
})


    // let next = document.getElementById("next")
    // next.addEventListener("click",()=>{
    //     loction.filter((e,index)=>{
    //         if(e.href == window.location.href){
    //             let numb = index+1
    //             let path = loction[numb].href
    //             window.location = path
    //         }
    //     })
    // })

const nextpage = ()=>{
    loction.filter((e,index)=>{
        if(e.href == window.location.href){
            let numb = index+1
            let path = loction[numb].href
            window.location = path
        }
    })
}
const prevpage = ()=>{
    loction.filter((e,index)=>{
        if(e.href == window.location.href){
            let numb1 = index-1
            let path = loction[numb1].href
            window.location = path
        }
    })
}

const nextbar = ()=>{
    let maintag = document.querySelector("main")
    let nextbar = document.createElement("div")
    let next = document.createElement("button")
    let prev = document.createElement("button")
    nextbar.id = "nextbar"
    next.textContent = "next"
    prev.textContent = "prev"
    next.addEventListener("click",()=>{nextpage()})
    prev.addEventListener("click",()=>{prevpage()})
    nextbar.appendChild(prev)
    nextbar.appendChild(next)
    maintag.insertAdjacentElement("beforeend",nextbar)
}
nextbar()

//

let inpro = document.getElementsByClassName("inpro")
let ainpro = Array.from(inpro)

let cur = document.createElement("div")
cur.className = "cor"

ainpro.forEach((e)=>{
    e.appendChild(cur)
    e.addEventListener(["mousemove"||"touchmove"],(c)=>{
        let x = c.pageX
        let y = c.pageY
        cur.style.display = "block"
        cur.style.top = y-100+"px"
        cur.style.left = x-100+"px"
    })
})

ainpro.forEach((c)=>{
    c.addEventListener("mouseleave",(e)=>{
        cur.style.display = "none"
    })
})

//csscodeEditor
const enginofcss = (param)=>{
    let writechilds =Array.from(param.parentNode.children)
    let htmlcode = writechilds[0].value
    let csscode = writechilds[1].value
    
    let codeoutput =(param.parentElement.parentElement.children[1].children[0])
    codeoutput.srcdoc = `<style>*{font-family: Arial, Helvetica, sans-serif;}${csscode}</style>${htmlcode}`
}
const enginofcssin600 = (param)=>{
    let writechilds =Array.from(param.parentNode.children)
    let htmlcode = writechilds[0].value
    let csscode = writechilds[1].value
    
    let codeoutputarr = Array.from(param.parentElement.parentElement.children)
    let codeoutput = codeoutputarr[2].children[0]
    codeoutput.srcdoc = `<style>${csscode}</style>${htmlcode}`
}

let codearea = Array.from(document.getElementsByClassName("codearea"))

codearea.forEach((e)=>{
    e.addEventListener("keyup",()=>{
        enginofcss(e)
    })
    window.addEventListener("load",()=>{
        if (screen.width <= 600) {
            e.addEventListener("keyup",()=>{
                enginofcssin600(e)
                console.log("kkk");
            })
            enginofcss(e)
        } else {
            enginofcss(e)
        }

    })
})

//csscodeEditor
let csseditor = Array.from(document.getElementsByClassName("csseditor"))
window.addEventListener("load",()=>{
    if(screen.width <= 600){
        csseditor.forEach((e)=>{
            let editorturn = document.createElement("button")
            editorturn.innerText = "css"
            editorturn.setAttribute("class", "editorturnbtn")
            e.insertAdjacentElement("afterbegin",editorturn) 

        })
    }
})

window.addEventListener("load",()=>{
    if (screen.width <= 600) {
        let editorturnbtn = Array.from(document.getElementsByClassName("editorturnbtn"))
        editorturnbtn.forEach((b)=>{
            b.addEventListener("click",(e)=>{
                let parentw = Array.from(e.target.parentElement.children)
                let writebox = Array.from(parentw[1].children)

                let htmlcard = writebox[0]
                let csscard = writebox[1]
                if (e.target.innerText == "css") {
                    e.target.innerText = "html"
                    htmlcard.style.zIndex = "1";
                }
                else if(e.target.innerText == "html"){
                    e.target.innerText = "css"
                    htmlcard.style.zIndex = "2";
                }
            })
        })
    }
})
