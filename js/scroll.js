/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')


function scrollActive(){
    const scrollY = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navigation__list a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.navigation__list a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const sr =ScrollReveal({
    distance:"60px",
    duration:2500,
    delay:400,
})

sr.reveal(`.hero`)
sr.reveal(`.hero__overview`,{delay: 700})
sr.reveal(`.hero__image`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsors__image, .products-set__card, .footer__logo, .footer__content`,{origin: 'top', interval: 100})
sr.reveal(`.specs__item, .discount__description`,{origin: 'left', interval: 100})
sr.reveal(`.specs__image, .discount__image`,{origin: 'right'})
sr.reveal(`.case__image`,{origin: 'top'})
sr.reveal(`.case__description`)