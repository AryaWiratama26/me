const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

themeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('myMenu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        menuIcon.classList.replace('uil-bars', 'uil-times');
    } else {
        menuIcon.classList.replace('uil-times', 'uil-bars');
    }
});

const navLinks = document.querySelectorAll('.menu-list .link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuIcon.classList.replace('uil-times', 'uil-bars');
    });
});

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 90; 
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu-list a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.menu-list a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 80) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

window.addEventListener('scroll', scrollHeader);

function scrollUp() {
    const scrollUp = document.getElementById('backToTop');
    if (this.scrollY >= 560) {
        scrollUp.classList.add('active');
    } else {
        scrollUp.classList.remove('active');
    }
}

window.addEventListener('scroll', scrollUp);

document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const typed = new Typed('.typedText', {
    strings: ['a ML Engineer', 'an AI Specialist', 'a Data Scientist'],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 2000,
    loop: true
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
});

sr.reveal('.featured-card', {});
sr.reveal('.featured-name', {delay: 500});
sr.reveal('.featured-info', {delay: 600});
sr.reveal('.social-media-icons', {delay: 700});
sr.reveal('.cta-buttons', {delay: 800});
sr.reveal('.image-container', {origin: 'right', delay: 600});
sr.reveal('.scroll-icon', {delay: 1000});

sr.reveal('.header-me', {});
sr.reveal('.about-in', {delay: 600});
sr.reveal('.skills-frame', {interval: 100, delay: 700});

sr.reveal('.project-frame', {interval: 200});

sr.reveal('.contact-info', {delay: 600});
sr.reveal('.contact-form', {origin: 'right', delay: 700});

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formElements = form.elements;
        let allValid = true;
        
        for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].required && formElements[i].value === '') {
                allValid = false;
                formElements[i].style.borderColor = 'red';
            } else {
                formElements[i].style.borderColor = '';
            }
        }
        
        if (allValid) {
            // alert("you can't send it hahaha 🤣🤣🤣");
            Swal.fire({
                title: 'Prank',
                text: "you can't send it hahaha 🤣🤣🤣",
                confirmButtonText: 'Ok'
              })
            form.reset();
        }
    });
}

const projectFrames = document.querySelectorAll('.project-frame');

projectFrames.forEach(frame => {
    frame.addEventListener('mouseenter', () => {
        const description = frame.querySelector('.project-description');
        description.style.maxHeight = description.scrollHeight + 'px';
    });
    
    frame.addEventListener('mouseleave', () => {
        const description = frame.querySelector('.project-description');
        description.style.maxHeight = null;
    });
});

window.addEventListener('load', () => {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="loader">
            <svg viewBox="0 0 80 80">
                <circle id="loader-circle" cx="40" cy="40" r="32"></circle>
            </svg>
        </div>
    `;
    
    document.body.appendChild(preloader);
    
    const style = document.createElement('style');
    style.textContent = `
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--bg-primary);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s, visibility 0.5s;
        }
        .loader svg {
            width: 80px;
            height: 80px;
            animation: rotate 2s linear infinite;
        }
        #loader-circle {
            fill: none;
            stroke: var(--primary-color);
            stroke-width: 4;
            stroke-dasharray: 180;
            stroke-dashoffset: 0;
            animation: dash 1.5s ease-in-out infinite;
        }
        @keyframes rotate {
            100% { transform: rotate(360deg); }
        }
        @keyframes dash {
            0% {
                stroke-dashoffset: 180;
            }
            50% {
                stroke-dashoffset: 45;
                transform: rotate(135deg);
            }
            100% {
                stroke-dashoffset: 180;
                transform: rotate(360deg);
            }
        }
    `;
    
    document.head.appendChild(style);
    
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 1000);
});

document.addEventListener('mousemove', parallax);

function parallax(e) {
    const homeSection = document.getElementById('home');
    
    if (window.innerWidth > 992) {
        const speed = 5;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        const imageBackdrop = document.querySelector('.image-backdrop');
        if (imageBackdrop) {
            imageBackdrop.style.transform = `translate(${x}px, ${y}px)`;
        }
    }
}