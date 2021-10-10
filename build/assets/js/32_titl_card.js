const elements = document.querySelectorAll('.tilt-card')

const tilt = (event) => {
    let xPos = (event.clientX / window.innerWidth) - 0.5,
        yPos = (event.clientY / window.innerHeight) - 0.5,
        box = event.target;

    TweenLite.to(box, 0.6, {
        rotationY: 5 * xPos,
        rotationX: 5 * yPos,
        ease: Power1.easeOut,
        transformPerspective: 900,
        transformOrigin: 'center'
    });
}
elements.forEach(element => {
    element.addEventListener('mousemove', tilt, {passive: true})
})
