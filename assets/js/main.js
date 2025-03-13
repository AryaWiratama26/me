function menuFunction() {
    const menuBtn = document.getElementById("myMenu");
    menuBtn.classList.toggle("responsive");
}


window.onscroll = function() {
    headerShadows();
}

function headerShadows() {
    const header = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
        header.style.height = "70px";
        header.style.lineHeight = "70px";
    }else {
        header.style.boxShadow = "none";
        header.style.height = "90px";
        header.style.lineHeight = "90px";
    }
}

var typingEffect = new Typed(".typedText", {
    strings : ["Machine Learning Engineer", "Gamer", "Student"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
});

ScrollReveal().reveal('.featured', {
    delay: 200,
    duration: 500,    
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '10px'
});

ScrollReveal().reveal('.about-in', {
    delay: 200,
    duration: 500,    
    reset: true,
    origin: 'left',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '10px'
});

ScrollReveal().reveal('.skills-frame', {
    delay: 200,
    duration: 500,    
    reset: true,
    origin: 'right',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '10px'
});


ScrollReveal().reveal('.project-frame', {
    delay: 200,
    duration: 500,    
    reset: true,
    origin: 'bottom',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '10px'
});

ScrollReveal().reveal('.footer', {
    delay: 200,
    duration: 500,    
    reset: true,
    origin: 'bottom',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '10px'
});