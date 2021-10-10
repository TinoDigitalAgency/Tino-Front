const testimonialTabs = document.querySelectorAll('.testimonials-tab');
const testimonialTabsContent = document.querySelectorAll('.testimonial-item');
const changeTestimonial = (e) => {
    const tabID = e.target.attributes[1].value
    const tabContent = document.getElementById(tabID);
    const targetElement = e.target;
    let tabTimeline = gsap.timeline();
    let currentTabContent = null;

    testimonialTabsContent.forEach(testimonialTabContent => {
        if(testimonialTabContent.classList.contains('active')) {
            currentTabContent = testimonialTabContent
        }
    })

    if(!targetElement.classList.contains('active')) {
        console.log(e);
        testimonialTabs.forEach(testimonialTab => {
            testimonialTab.classList.remove('active');
        });
        testimonialTabsContent.forEach(testimonialTab => {
            testimonialTab.classList.remove('active');
        });
        targetElement.classList.add('active');
        tabContent.classList.add('active');
        tabTimeline.fromTo(currentTabContent, .2, {opacity: 1, y: 0}, {opacity: 0, y: "50px"});
        tabTimeline.to(currentTabContent, 0, {display: 'none'});
        tabTimeline.to(tabContent, 0, {display: 'block'});
        tabTimeline.fromTo(tabContent, 1, {opacity: 0, y: '50px'}, {opacity: 1, y: '0'});


        console.log(tabID);
    }
}

testimonialTabs.forEach(testimonialTab => {
    testimonialTab.addEventListener('click', changeTestimonial)
})

