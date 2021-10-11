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

    const practiceSliderImg = new Swiper(".practice-slider__left", {
        loop: true,
        speed: 1000,
        effect: "fade",
        pagination: {
            el: ".practice-nav",
            clickable: false,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
    });
    const practiceSlider = new Swiper(".practice-slider__right", {
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".practice-next"
        },
        on: {
            init: function () {
                document.querySelector('.practice-next .loader').classList.add('run');
            },
        },
    });
    practiceSlider.on('slideChangeTransitionEnd', function () {
        document.querySelector('.practice-next .loader').classList.add('run');
    });
    practiceSlider.on('slideChangeTransitionStart', function () {
        document.querySelector('.practice-next .loader').classList.remove('run');
    });
    practiceSlider.controller.control = practiceSliderImg;
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
