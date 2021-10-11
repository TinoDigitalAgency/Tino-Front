const showReelVideo = document.getElementById('showreel-video');
const showReelWrapper = document.querySelector('.showreel-wrapper');
const showReelInner = showReelWrapper.childNodes[1];
const cursor = document.querySelector('.cursor')
const showReelTimeline = gsap.timeline();
const closeShowreel = (e) => {
    showReelVideo.pause();
    showReelTimeline.fromTo(showReelInner, .7, {opacity: 1}, {opacity: 0});
    showReelTimeline.to(showReelWrapper, 0, {display: 'none'});
    cursor.classList.remove('cursor-close');
}
document.querySelector('.play-showreal').addEventListener('click', (e) => {
    e.preventDefault();
    showReelTimeline.to(showReelWrapper, 0, {display: 'block'});
    showReelTimeline.fromTo(showReelInner, .7, {opacity: 0}, {opacity: 1});
    showReelVideo.play();
});
showReelVideo.onended = () => {
    showReelTimeline.fromTo(showReelInner, .7, {opacity: 1}, {opacity: 0});
    showReelTimeline.to(showReelWrapper, 0, {display: 'none'});
    cursor.classList.remove('cursor-close');
}
showReelVideo.addEventListener('click', closeShowreel);

const videoCursorHandler = (e) => {
    if(e.target.classList.contains('cursor-close')) {
        cursor.classList.add('cursor-close');
        gsap.to(cursor, .2, {x: e.clientX, y: e.clientY, scale: 1})
    } else {
        cursor.classList.remove('cursor-close');
    }
}

window.addEventListener('mousemove', videoCursorHandler)