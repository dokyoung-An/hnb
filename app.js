const menuBtn = document.querySelector(".menu-btn5");
const navigationBtn = document.querySelector(".navigation")
const sliderBtn = document.querySelectorAll(".nav-btn")
const slides = document.querySelectorAll(".video-slide")
const content = document.querySelectorAll(".content")
const lang = document.querySelector(".lang")
const lang1 = document.querySelector(".none1")
const mainWorks = document.querySelector(".main-works1")
const mainService = document.querySelector(".main-service1")
const mainAbout= document.querySelector(".main-about1")
const sideBarMenu = document.querySelector(".menu-btn3")
const sideBar = document.querySelector(".side-bar")
const subMainWorks = document.querySelector(".main-works")
const subMainService = document.querySelector(".main-service")
const subMainAbout = document.querySelector(".main-about")
const rightSideBar =document.querySelector(".rightside-bar")


menuBtn.addEventListener("click",() => {
    menuBtn.classList.toggle("active");
    navigationBtn.classList.toggle("active");
});

let sliderNav = function(manual) {
    sliderBtn.forEach((btn)=> {
        btn.classList.remove("active");
    })

    slides.forEach((slide) => {
        slide.classList.remove("active");
    })
    content.forEach((content) => {
        content.classList.remove("active");
    })
    sliderBtn[manual].classList.add("active");
    slides[manual].classList.add("active");
    content[manual].classList.add("active");
}

sliderBtn.forEach((btn,i) => { 
    btn.addEventListener("click",() =>{
        sliderNav(i);
    });
    

});

function onChangeLang ( ) {

    if(lang.innerText === "KOR") {
    lang.innerText = "ENGLISH";
    location.href="http://www.hnb-cm.com/";
} else {
    lang.innerText = "KOR";
}
}

function onChangeLang1 () {
    if(lang1.innerText==="KOR") {
        lang1.innerText ="ENGLISH";
        location.href ="http://www.hnb-cm.com/";
    } else {
        lang1.innerText ="KOR";
    }
}


function onMainWorks (){
    subMainWorks.classList.add("active");
    subMainService.classList.remove("active");
    subMainAbout.classList.remove("active");
    rightSideBar.classList.add("active");
}
function onMainService (){
    subMainService.classList.add("active");
    subMainWorks.classList.remove("active");
    subMainAbout.classList.remove("active");
    rightSideBar.classList.add("active");
}
function onMainAbout (){
    subMainAbout.classList.add("active");
    subMainService.classList.remove("active");
    subMainWorks.classList.remove("active");
    rightSideBar.classList.add("active");
}

// function onClose () {
//     sideBar.classList.remove("active");
// }

sideBarMenu.addEventListener("click",() => {
    sideBar.classList.toggle("active");
    sideBarMenu.classList.toggle("active");
   rightSideBar.classList.remove("active")
       
});


lang.addEventListener("click", onChangeLang)
lang1.addEventListener("click", onChangeLang1)

mainWorks.addEventListener("click",onMainWorks)
mainService.addEventListener("click",onMainService)
mainAbout.addEventListener("click",onMainAbout)

rightSideBar.addEventListener("mouseover",()=> {
    rightSideBar.classList.add("active");
})
rightSideBar.addEventListener("mouseout",()=> {
    rightSideBar.classList.remove("active");
})
