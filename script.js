const backgroundImage = document.getElementById("stars")

// * Background starController
document.addEventListener("DOMContentLoaded",dots);
function dots(){
    for (let i = 0; i < 200; i++) {
        const dot = document.createElement("div");
        // dot position
        dot.classList.add("circle");
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
                dot.classList.add("circle2");
                backgroundImage.appendChild(dot);
                dot.style.top = (window.innerHeight * Math.random())+"px";
                dot.style.left = (window.innerWidth * Math.random())+"px";
                
                dot.size = Math.floor(5 * Math.random());
                dot.style.height = dot.size + "px";
                dot.style.width = dot.size + "px";}

                dot.style.opacity = brightness;
    }
}
// * Slide Controller
let slides = document.querySelectorAll(".slide")
let slideLoop = Array.from(slides);
function displaySlides(){
    console.log(slideLoop);
    let shownSlides = slideLoop.slice(0,4);
    shownSlides.forEach((slide, i) =>{
        slide.classList.remove("slide0");
        slide.classList.remove("slide1");
        slide.classList.remove("slide2");
        slide.classList.remove("slide3");
    });
    shownSlides.forEach((slide,i) =>{
        slide.classList.add(`slide${i}`);
    })
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
next.onclick = slideNext;
back.onclick = slidePrev;   