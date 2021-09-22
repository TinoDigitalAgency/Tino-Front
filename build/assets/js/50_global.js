document.addEventListener('DOMContentLoaded', function(){
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