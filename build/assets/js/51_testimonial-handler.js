const testimonialTabs = document.querySelectorAll('.testimonials-tab');
const testimonialTabsContent = document.querySelectorAll('.testimonial-item');
const changeTestimonial = (e) => {
    const tabID = e.target.attributes[1].value
    const tabContent = document.getElementById(tabID);
    const targetElement = e.target;
    let tabTimeline = gsap.timeline();
    let currentTabContent = null;
    const translateVal = window.outerWidth < 768 ? '10px' : '50px'

    testimonialTabsContent.forEach(testimonialTabContent => {
        if(testimonialTabContent.classList.contains('active')) {
            currentTabContent = testimonialTabContent
        }
    })

    if(!targetElement.classList.contains('active')) {
        testimonialTabs.forEach(testimonialTab => {
            testimonialTab.classList.remove('active');
        });
        testimonialTabsContent.forEach(testimonialTab => {
            testimonialTab.classList.remove('active');
        });
        targetElement.classList.add('active');
        tabContent.classList.add('active');
        tabTimeline.fromTo(currentTabContent, .2, {opacity: 1, y: 0}, {opacity: 0, y: translateVal});
        tabTimeline.to(currentTabContent, 0, {display: 'none'});
        tabTimeline.to(tabContent, 0, {display: 'block'});
        tabTimeline.fromTo(tabContent, 1, {opacity: 0, y: translateVal}, {opacity: 1, y: '0'});
    }
}

testimonialTabs.forEach(testimonialTab => {
    testimonialTab.addEventListener('click', changeTestimonial)
})

