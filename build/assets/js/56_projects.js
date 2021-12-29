const FILTER_TRIGGER = document.querySelector('.filter-trigger');
const FILTER_OVERLAY = document.querySelector('.project-filter-overlay');
const FILTER_WRAPPER = document.querySelector('.project-filter');
const dataFilters = document.getElementsByClassName("filter-btn");
const filterHandler = (e) => {
    e.preventDefault();
    FILTER_OVERLAY.classList.add('active');
    FILTER_WRAPPER.classList.add('active');
    // document.querySelector('body').css.overflow = 'hidden';
}
const filterClose = (e) => {
    e.preventDefault();
    FILTER_OVERLAY.classList.remove('active');
    FILTER_WRAPPER.classList.remove('active');
    // document.querySelector('body').css.overflow = 'auto';
}

const filterToggle = (target, grid, event) => {
    for(let i = 0; i < dataFilters.length; i++) {
        dataFilters[i].classList.remove('active');
    }
    filterClose(event);
    if(target) {
        target.classList.add('active');
    }
    FILTER_TRIGGER.querySelector('.filter-selection').textContent = target.querySelector('span').textContent
    let filterValue = target.getAttribute('data-filter');
    grid.arrange({ filter: filterValue });
}

FILTER_TRIGGER.addEventListener('click', filterHandler);
FILTER_OVERLAY.addEventListener('click', filterClose);
window.addEventListener('load', function(){
    let grid = new Isotope('.grid', {
        itemSelector: '.element-item',
        filter: '*',
        layoutMode: 'masonry'
    });
    for(let i = 0; i < dataFilters.length; i++) {
        dataFilters[i].addEventListener('click', (element) => filterToggle(element.target, grid, element));
    }
});