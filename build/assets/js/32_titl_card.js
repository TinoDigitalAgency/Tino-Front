const elements = document.querySelectorAll('.tilt-card')

// TweenLite.set(elements, {
//     transformPerspective: 900,
//     transformOrigin: 'center center -10'
// });

function onMouseMove (e) {
    // console.log(e.currentTarget);
    const elXPos = e.currentTarget.getBoundingClientRect().left
    const elYPos = e.currentTarget.getBoundingClientRect().top
    const width = e.currentTarget.getBoundingClientRect().width
    const height = e.currentTarget.getBoundingClientRect().height
    const elRelativeXPos = e.pageX - elXPos
    const elRelativeYPos = e.pageY - elYPos
    const xPos = ((elRelativeXPos / width) - 0.5)*2
    const yPos = ((elRelativeYPos / height) - 0.5)*2
    const rotationXValue = 2 * yPos
    const rotationYValue = -2 * xPos


    TweenLite.to(e.currentTarget, 10, {
        rotationY: rotationYValue,
        rotationX: rotationXValue,
        ease: Expo.easeOut,
    })
}

// elements.forEach(element => {
//     element.addEventListener('mousemove', onMouseMove)
// })