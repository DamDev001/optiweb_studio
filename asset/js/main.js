const header = document.querySelector("header")

window.onscroll = function() {
    var scrolled = document.documentElement.scrollTop;
    if (scrolled > 80) {
        header.classList.add("activeHeader")
    } else {
        header.classList.remove("activeHeader")
    }
};


const serviceImage = document.querySelectorAll(".service-image")
document.addEventListener("mousemove", (e) =>{
    let x = e.clientX;
    let y = e.clientY;

    for (let i = 0; i < serviceImage.length; i++) {
        const element = serviceImage[i];

        element.style.left = `${x}px`
        element.style.top = "20px"
        
    }

    
})
// gsap.to(".logoContainer", 2, {
//     top: "40px"
// })

gsap.from("header", 2, {
    top: "40px"
})



// gsap.registerPlugin(ScrollTrigger)

// ScrollTrigger.create({
//     trigger: "#hero-section",
//     start: "top top",
//     pinSpacing: false,  
//     pin: true,
// })
