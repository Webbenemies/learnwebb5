console.log("cHTML");

const navlink = [
    {
        lable: "HTML PROTO",
        ahref:[
            {atext:"WHAT IS HTML", address:"../CHTML/homehtml.html"},
            {atext:"EDITORS", address:"../CHTML/editor.html"},
            {atext:"HTML Page Skeleton", address:"../CHTML/HTMlSkeleton.html"},
            {atext:"HTML ELEMENTS", address:"../CHTML/html-elements.html"},
            {atext:"HTML TEXTS", address:"../CHTML/html-texts.html"},
            {atext:"HTML ATTRIBUTES", address:"../CHTML/html-attributes.html"},
            {atext:"DOC TITLE & FAVICON", address:"../CHTML/html-favicon-title.html"},
            {atext:"STYLE ATTRIBUTE", address:"../CHTML/html-style-attributes.html"},
            {atext:"ANCHORS",address:"../CHTML/html-link.html"},
            {atext:"BLOCK vs INLINE", address:"../CHTML/html-block-inline.html"},

        ]
    },
    {
        lable: "HTML BETA",
        ahref:[
            {atext:"HTML IMGAGES", address:"../CHTML/html-img.html"},
            {atext:"HTML VIDEOS", address:"../CHTML/html-video.html"},
            {atext:"HTML AUDIOS", address:"../CHTML/html-audio.html"},
            {atext:"IFRAME", address:"../CHTML/html-iframe.html"},
            {atext:"LIST", address:"../CHTML/html-Lists.html"},
            {atext:"TABLES", address:"../CHTML/html-Tables.html"},
            {atext:"HTML FORM BASICS", address:"../CHTML/html-forms.html"},
            {atext:"HTML FORM ELEMENTS", address:"../CHTML/html-form-elements.html"},
            {atext:"FORM ELEMENTS SET 2", address:"../CHTML/html-form-elements-set2.html"},
        ]
    },
    {
        lable: "HTML BETA",
        ahref:[
            {atext:"UNCOVER HEAD ELEMS", address:"../CHTML/html-head.html"},
            {atext:"SEMANTIC ELEMS", address:"../CHTML/html-semantic-elem.html"},
            {atext:"THE END GAME", address:"../Complete-Missions/html-mission.html"},
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
        let hiifwidth = (cur.offsetWidth)/2
        let x = c.pageX;
        let y = c.pageY;
        cur.style.display = "block";
        cur.style.top = y-hiifwidth+"px";
        cur.style.left = x-hiifwidth+"px";
    })
})

ainpro.forEach((c)=>{
    c.addEventListener("mouseleave",(e)=>{
        cur.style.display = "none"
    })
})
//

let menubox = Array.from(document.getElementsByClassName("menubox"))
let cont = 0

menubox.forEach((e)=>{
    e.addEventListener("click",()=>{
        if (cont == 0) {
            sidenav.style.display = "block"
            document.body.style.overflowY = "hidden"
            responnav.classList.remove("block")
            cont = cont+ 1
        }else if (cont > 0) {
            document.body.style.overflowY = "scroll"
            sidenav.style.display = "none"
            cont = 0
        }
    })

})


let navbarbox = document.getElementById("navbarbox")
let responnav = document.getElementById("responnav")
navbarbox.addEventListener("click",()=>{
        document.body.style.overflowY = "scroll"
        sidenav.style.display = "none"
        responnav.classList.toggle("block")
})

window.addEventListener("scroll",()=>{
    if(window.scrollY>=900 && window.scrollY <= 950){
        console.log(window.scrollY);
        responnav.classList.remove("block")
    }
})