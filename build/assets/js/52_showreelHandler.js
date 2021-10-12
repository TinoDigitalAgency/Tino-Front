const showReelVideo = document.getElementById('showreel-video');
if (showReelVideo) {
    const showReelWrapper = document.querySelector('.showreel-wrapper');
    const showReelInner = showReelWrapper.childNodes[1];
    const cursor = document.querySelector('.cursor')
    const showReelTimeline = gsap.timeline();
    let mouseX = 0,
        mouseY = 0;
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
        const cursor = document.querySelector('.cursor');
        if(e.target.classList.contains('cursor-close')) {
            cursor.classList.add('cursor-close');
            // gsap.to(cursor, .2, {x: e.clientX, y: e.clientY, scale: 1})
        } else {
            cursor.classList.remove('cursor-close');
        }
    }

    const cursorHandler = (e) => {
        if(cursor.classList.contains('cursor-close')) {
            if(e.type === 'mousewheel' || e.type === 'scroll') {
                const htmlScrollTop = e.target.firstElementChild.scrollTop;
                gsap.to(cursor, .5, {x: mouseX, y: htmlScrollTop + mouseY , scale: 1})
            } else if (e.type === 'mousemove') {
                const html = document.querySelector('html')
                const htmlScrollTop = html.scrollTop
                mouseX = e.clientX;
                mouseY = e.clientY;
                gsap.to(cursor, 0, {x: mouseX, y: mouseY + htmlScrollTop, scale: 1})
            }
        }
    }


    window.addEventListener('mousemove', videoCursorHandler, {passive: true})
    window.addEventListener('mousemove',    cursorHandler, {passive: true});
    window.addEventListener('scroll',    cursorHandler, {passive: true})

}
