console.log(window.performance);
document.addEventListener('DOMContentLoaded', function(){
    toggleActiveClass('.hero-line-animation', 'active');
    toggleActiveClass('.fadeAnim', 'animated', true);

    const boxes = gsap.utils.toArray('.scrollAlfaActivated');
    boxes.forEach((box, i) => {
        const anim = gsap.fromTo(box, { autoAlpha: 0, y: 150 }, { duration: 1, autoAlpha: 1, y: 0 });
        ScrollTrigger.create({
            trigger: box,
            animation: anim,
            toggleActions: 'play none none none',
            once: true });
    });
    const runStroke = new Swiper('.run-stroke', {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freeMode: true,
        loop: true,
        speed: 7000,
        disableOnInteraction: false,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        }
    });

    const clientSlider = new Swiper('.partner-slider', {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freeMode: true,
        loop: true,
        speed: 7000,
        disableOnInteraction: false,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        }
    });

    const teamSlider = new Swiper(".team-slider", {
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".team-next"
        },
    });
    teamSlider.on('slideNextTransitionStart', function () {
        const nextBtn = document.querySelector('.team-next');
        nextBtn.classList.add('stopAnimation')
    });
    teamSlider.on('slideNextTransitionEnd', function () {
        const nextBtn = document.querySelector('.team-next');
        nextBtn.classList.remove('stopAnimation')
    });
});

const toggleActiveClass = (selector, classToggled, isArray = false) => {
    if (!isArray) {
        document.querySelector(selector).classList.add(classToggled)
    } else {
        document.querySelectorAll(selector).forEach(value => {
            value.classList.add(classToggled);
        })
    }
}