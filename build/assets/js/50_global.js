console.log(window.performance);
const menuTrigger = document.querySelector('.menu-btn');
const menuTriggerClose = document.querySelector('.close-menu');
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
        spaceBetween: 5,
        freeMode: true,
        loop: true,
        speed: 7000,
        disableOnInteraction: false,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                spaceBetween: 80,
            }
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
        autoHeight: true,
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
        autoHeight: true,
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
    practiceSliderImg.controller.control = practiceSlider;

    responsiveSwiper();

    menuTrigger.addEventListener('click', primaryMenuTrigger);
    menuTriggerClose.addEventListener('click', primaryMenuTriggerClose);

});
const parallaxSections = document.querySelectorAll('.parallax-wrapper');
let lastScrollPosition = 0;
const  primaryMenuTrigger = () => {
    const primaryMenu = document.getElementById('main-menu');
    const menuTimeLine = gsap.timeline();
    menuTimeLine.to(primaryMenu, 0, {display: 'block'})
    menuTimeLine.to(primaryMenu, 1, {opacity: 1});
    primaryMenu.classList.add('menu-open');
}
const  primaryMenuTriggerClose = () => {
    const primaryMenu = document.getElementById('main-menu');
    const menuTimeLine = gsap.timeline();
    menuTimeLine.to(primaryMenu, .4, {opacity: 0})
    menuTimeLine.to(primaryMenu, 0, {display: 'none'});
    // primaryMenu.style.display = 'block';
    // primaryMenu.classList.add('menu-open');
}
const parallaxHandler = (e) => {
    const htmlScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    parallaxSections.forEach(parallaxSection => {
        const offsetTop = parallaxSection.offsetTop;
        const windowHeight = window.innerHeight;
        const scrollTop = htmlScrollTop + windowHeight;
        const parallaxBg = parallaxSection.querySelector('.parallax-bg');
        const scrollProgrees = scrollTop - offsetTop;
        let percentProgress = scrollProgrees / windowHeight * 100;
        if(percentProgress < 0) {
            percentProgress = 0;
        } else if(percentProgress > 100) {
            percentProgress = 100;
        }
        if(scrollTop > offsetTop) {
            gsap.to(parallaxBg, .3, {y: '-'+percentProgress/2+'%'});
        }
        lastScrollPosition = htmlScrollTop <= 0 ? 0 : htmlScrollTop;
    })

}
if(parallaxSections) {
    document.addEventListener('scroll', parallaxHandler, {passive: true});
}
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
document.querySelectorAll('.activeDefault').forEach((element) => {
    const height = element.querySelector('.toggle-descriptions').scrollHeight;
    element.querySelector('.toggle-descriptions').style.height = `${height}px`;
    element.classList.add('active');
})

const responsiveSwiper = function () {
    let swiper = Swiper;
    function swiperMode() {
        if (window.innerWidth <= 767) {
            swiper = new Swiper('.mobile-slider', {
                freeMode: true,
                autoHeight: true,
                slidesPerView: "auto",
                scrollbar: {
                    el: ".swiper-scrollbar",
                    hide: true,
                },
            });
        } else {
            // swiper.destroy();
        }
    }

    window.addEventListener('resize', function() {
        swiperMode();
    });

    window.addEventListener('load', function() {
        swiperMode();
    });
}

const imageObserver = (e) => {
    const hoveredItem           = e.target;
    const hoveredItemImage      = hoveredItem.childNodes[3];
    if(hoveredItem.classList.contains('img-animation')) {
        const offset = hoveredItem.offsetLeft;
        const hoveredItemImageOffsetLeft = e.clientX - offset;
        if(hoveredItemImageOffsetLeft > 0) {
            hoveredItemImage.style.left = hoveredItemImageOffsetLeft + 'px'
        }
    }
}
document.querySelector('.img-animation-wrapper').addEventListener('mousemove', imageObserver)
