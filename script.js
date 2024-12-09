const backgroundImage = document.getElementById("pattern")

backgroundImage.onclick = dots;

function dots(){
    for (let i = 0; i < 10; i++) {
        const dot = document.createElement("div")
        // dot position
        dot.classList.add("circle")
        backgroundImage.appendChild(dot)
        dot.style.top = (window.innerHeight * Math.random())+"px";
        dot.style.left = (window.innerWidth * Math.random())+"px";
        // dot size
        dot.size = Math.floor(5 * Math.random());
        dot.style.height = dot.size + "px";
        dot.style.width = dot.size + "px";
        // dot opacity
        let brightness = (Math.floor(Math.random() * 10)+1)/10;
        dot.style.opacity = brightness;

        if (i<5)
            {const dot = document.createElement("div")
                dot.classList.add("circle2")
                backgroundImage.appendChild(dot)
                dot.style.top = (window.innerHeight * Math.random())+"px";
                dot.style.left = (window.innerWidth * Math.random())+"px";
                
                dot.size = Math.floor(5 * Math.random());
                dot.style.height = dot.size + "px";
                dot.style.width = dot.size + "px";}

                dot.style.opacity = brightness;
    }
}