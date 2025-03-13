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


ScrollReveal().reveal(".about-in", {
    distance: "50px",
    origin: "left",
    duration: 1000,
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
});

ScrollReveal().reveal(".skills-frame", {
    distance: "50px",
    origin: "right",
    duration: 1000,
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
})


ScrollReveal().reveal(".project-frame", {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
})

ScrollReveal().reveal(".project-frame", {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
})


ScrollReveal().reveal(".top-footer", {
    distance: "50px",
    origin: "left",
    duration: 1000,
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
})


ScrollReveal().reveal(".mid-footer", {
    distance: "50px",
    origin: "right",
    duration: 1000,
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
})


ScrollReveal().reveal(".footer-social-icons", {
    distance: "50px",
    origin: "left",
    duration: 1000,
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
})

ScrollReveal().reveal(".bottom-footer", {
    distance: "50px",
    origin: "right",
    duration: 1000,
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
})

