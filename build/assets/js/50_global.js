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
});

const toggleActiveClass = (selector, classToggled, isArray = false) => {
    if (document.querySelector(selector)) {
        if (!isArray) {
            document.querySelector(selector).classList.add(classToggled)
        } else {
            document.querySelectorAll(selector).forEach(value => {
                value.classList.add(classToggled);
            })
        }
    }
}

// Toggle
const removeTgl = function () {
    document.querySelectorAll('.toggle').forEach((e) => {
        if (e.classList.contains('active')) {
            e.querySelector('.toggle-descriptions').style.height = `${0}px`;
            e.classList.remove('active');
        }
    });
};
document.querySelectorAll('.toggle').forEach((e) => {
    e.addEventListener('click', () => {
        if (e.classList.contains('active')) {
            e.classList.remove('active');
            e.querySelector('.toggle-descriptions').style.height = `${0}px`;
        } else {
            removeTgl();
            const height = e.querySelector('.toggle-descriptions').scrollHeight;
            e.querySelector('.toggle-descriptions').style.height = `${height}px`;
            e.classList.add('active');
        }
    })
});
