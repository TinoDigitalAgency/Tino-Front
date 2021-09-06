document.addEventListener('DOMContentLoaded', function(){
    const swiper = new Swiper('.run-stroke', {
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
});