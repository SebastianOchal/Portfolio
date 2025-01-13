const backgroundImage = document.getElementById("stars")

// * Background starController
document.addEventListener("DOMContentLoaded",dots);
function dots(){
    for (let i = 0; i < 200; i++) {
        const dot = document.createElement("div");
        // dot position
        dot.classList.add("star");
        backgroundImage.appendChild(dot);
        dot.style.top = (window.innerHeight * Math.random())+"px";
        dot.style.left = (window.innerWidth * Math.random())+"px";
        // dot size
        dot.size = Math.floor(5 * Math.random());
        dot.style.height = dot.size + "px";
        dot.style.width = dot.size + "px";
        // dot opacity
        let brightness = (Math.floor(Math.random() * 10)+1)/10;
        dot.style.opacity = brightness;

        if (i<75)
            {const dot = document.createElement("div");
                dot.classList.add("star2");
                backgroundImage.appendChild(dot);
                dot.style.top = (window.innerHeight * Math.random())+"px";
                dot.style.left = (window.innerWidth * Math.random())+"px";
                
                dot.size = Math.floor(5 * Math.random());
                dot.style.height = dot.size + "px";
                dot.style.width = dot.size + "px";}

                dot.style.opacity = brightness;
    }
}
// * Navbar Display
const navbar = document.getElementById("linkContainer");
const navMenu = document.getElementById("navMenu");
let barHidden = false;
let prevScrollpos = window.scrollY;
window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        navbar.style.right = "0";
        navbar.style.opacity = "1";
        barHidden = false;
    } else {
        navbar.style.right = "1200px";
        navbar.style.opacity = "0";
        barHidden = true;
    prevScrollpos = currentScrollPos;
    }
}
function menuColour(){
    navMenu.classList.toggle("navMenuHover");
}
function showMenu(){
    if (barHidden == true){
        navbar.style.right = "0";
        navbar.style.opacity = "1";
        barHidden = false;
    }else{
        navbar.style.right = "1200px";
        navbar.style.opacity = "0";
        barHidden = true;
    }
}
navMenu.onmouseover = menuColour;
navMenu.onmouseout = menuColour;
navMenu.onclick = showMenu;

// * Slide Controller
let slides = document.querySelectorAll(".slide");
let slideLoop = Array.from(slides);

console.log(slideLoop);
function displaySlides(){
    let shownSlides = slideLoop.slice(0,4);
    shownSlides.forEach((slide) =>{
        slide.classList.remove(`slide0`);
        slide.classList.remove("slide1");
        slide.classList.remove("slide2");
        slide.classList.remove("slide3");
    });
    shownSlides.forEach((slide,i) =>{
        slide.classList.add(`slide${i}`);
    })
    console.log(`shownSlides ${shownSlides}`)
}

function slideNext(){
    slideLoop.push(slideLoop.shift());
    displaySlides()
}
function slidePrev(){
    slideLoop.unshift(slideLoop.pop());
    displaySlides()
}
const next = document.getElementById("next")
const back = document.getElementById("back")
back.addEventListener("click",()=>{
    console.log("Clicked")
})
next.onclick = slideNext;
back.onclick = slidePrev;