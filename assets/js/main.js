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
})