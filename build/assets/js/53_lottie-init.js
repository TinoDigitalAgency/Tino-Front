const initLottie = () => {
    let illustrationAnimation = null;
    let smileyGlassesAnimation = null;
    let smileyAnimation = null;
    let smileyCallAnimation = null;
    const illustrationAnimationElement = document.getElementById('illustration-animation');
    const smileyGlassesAnimationElement = document.getElementById('smiley-glasses-animation');
    const smileyAnimationElement = document.getElementById('smile-animation');
    const smileyCallAnimationElement = document.getElementById('smile-call-animation');



    if(illustrationAnimationElement) {
        illustrationAnimation = bodymovin.loadAnimation({
            container: illustrationAnimationElement,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/assets/animation/illustration-animation/data.json'
        });
    }

    if(smileyGlassesAnimationElement) {
        smileyGlassesAnimation = bodymovin.loadAnimation({
            container: smileyGlassesAnimationElement,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/assets/animation/smiley-glasses-animation/data.json'
        });
    }
    if(smileyAnimationElement) {
        smileyAnimation = bodymovin.loadAnimation({
            container: smileyAnimationElement,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/assets/animation/smile-animation/data.json'
        });
    }
    if(smileyCallAnimationElement) {
        smileyCallAnimation = bodymovin.loadAnimation({
            container: smileyCallAnimationElement,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/assets/animation/smile-call-animation/data.json'
        });
    }
}

document.addEventListener('DOMContentLoaded', initLottie)
