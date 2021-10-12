const faqTriggers = document.querySelectorAll('.faq-trigger');

const faqHandler = (e) => {
    const targetTrigger = e.target;
    const parentWrapper = targetTrigger.parentElement.parentElement;
    const faqContent = parentWrapper.childNodes[3];
    const faqContentInner = faqContent.childNodes[1];
    const faqTimeline = gsap.timeline();
    console.log(e);
    console.log(faqContentInner);
    // onResize();
    if (parentWrapper.classList.contains('active')) {
        targetTrigger.classList.remove('active');
        parentWrapper.classList.remove('active');
        faqTimeline.fromTo(faqContent, .5, {height: faqContentInner.offsetHeight}, {height: 0});
        faqTimeline.to(faqContent, 0, {display: 'none'});
    } else {
        targetTrigger.classList.add('active');
        parentWrapper.classList.add('active');
        faqTimeline.fromTo(faqContent, 0, {display: 'none', height: 0}, {display: 'block', height: 0});
        faqTimeline.to(faqContent, .5, {height: faqContentInner.offsetHeight});
    }
}

faqTriggers.forEach(faq => {
    faq.addEventListener('click', faqHandler)
})