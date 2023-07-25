const header = document.querySelector("header")

window.onscroll = function() {
    var scrolled = document.documentElement.scrollTop;
    console.log(scrolled)
    if (scrolled > 80) {
        header.classList.add("activeHeader")
    }else {
        header.classList.remove("activeHeader")
    }

    if(scrolled > 1723){
        header.classList.remove("activeHeader")
        header.classList.add("changeActiveHeader")
    }else{
        header.classList.add("activeHeader")
        header.classList.remove("changeActiveHeader")
    }

    if(scrolled === 0){
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