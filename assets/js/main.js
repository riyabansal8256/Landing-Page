/* MENU SHOW */ 
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* GSAP ANIMATION */
/*HOME PRIMARY*/
TweenMax.to(".home__primary", 2, {
    width: "100%",
    ease: Expo.easeInOut
})
gsap.from('.home__title', {opacity: 0, duration: 2, delay: 1.5, y: 100})
gsap.from('.home__img img', {opacity: 0, duration: 2, delay:1.5, y: -100})

/* Scroll-triggered animations */
function scrollAnimations() {
    const scrollY = window.scrollY;

    // Check if the scroll position is within the range where you want the animation to trigger
    if (scrollY > 100) {
        // Trigger the animations
        gsap.from('.home__title', { opacity: 0, duration: 2, y: 100 });
        gsap.from('.home__img img', { opacity: 0, duration: 2, y: -100 });

        gsap.from('.home__scroll', { opacity: 0, duration: 3, x: -100 });
        gsap.from('.home__year', { opacity: -1, duration: 1.5, x: 100 });

        // Remove the event listener once the animations have been triggered
        window.removeEventListener('scroll', scrollAnimations);
    }
}

window.addEventListener('scroll', scrollAnimations);

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*HOME SECONDARY*/
TweenMax.to(".home__secondary", 2.5, {
    width: "100%",
    ease: Expo.easeInOut
})
gsap.from('.home__scroll', {opacity: 0, duration: 3, x: -100})
gsap.from('.home__year', {opacity: -1, duration: 1.5, delay: 1.5, x: 100})

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

// Home Section
sr.reveal(`.home__title`,{delay: 900})
sr.reveal(`.home__year`,{delay: 1200})
sr.reveal(`.home__img img`,{delay: 1200, origin: 'top'})

// Sponsor Section
sr.reveal(`.sponsor__img`,{origin: 'top', delay: 1200,})

// Fashion Section
sr.reveal(`.fashion__title, .fashion__subtitle`, { origin: 'left', delay: 1200, })
sr.reveal(`.fashion__img`, { origin: 'right' })

// Discount Section
sr.reveal(`.discount__animate`, { origin: 'left', delay: 1200, })
sr.reveal(`.discount__img`, { origin: 'right' })

// Products Section (Wardrobe)
sr.reveal(`.products__card`, { origin: 'bottom', delay: 1200, })

// Products Section (Jewellery)
sr.reveal(`.products__card`, { origin: 'bottom', delay: 1200, })


























