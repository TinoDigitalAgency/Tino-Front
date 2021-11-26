gsap.utils.toArray('.parallax-gsap').forEach((section, i) => {
    section.bg = section.querySelector(".parallax-gsap-bg");
    if(i >= 0) {
        // The image starts offset 50% of the vertical height. Remember, the background-attachment is 'fixed', so the offset is from the top of the viewport, not the top of the section.
        section.bg.style.backgroundPosition = `50% ${innerHeight / 2}px`;

        gsap.to(section.bg, {
            backgroundPosition: `50% ${-innerHeight / 2}`,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                scrub: true,
                // Default values:
                // start: "top bottom", // top of elem meets bottom of screen
                // end: "bottom top" // Bottom of elem meets top of screen
            }
        });
    }

    else {
        section.bg.style.backgroundPosition = "50% 0px";

        gsap.to(section.bg, {
            backgroundPosition: `50% ${-innerHeight / 2}px`,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top", // top of elem meets top of screen (e.g., on load)
                // end: "bottom top", // This is the default
                scrub: true
            }
        });
    }});

const videoParallax  = document.querySelectorAll('.video-parallax');
if(videoParallax.length > 0) {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#parallax-trigger",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    videoParallax.forEach(layer => {
        console.log(layer);
        const depth = layer.dataset.depth;
        const movement = -(layer.offsetHeight * depth)
        tl.to(layer, {y: movement, ease: "none"}, 0)
    })
}

