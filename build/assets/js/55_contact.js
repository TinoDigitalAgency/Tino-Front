const filterTriggers = document.querySelectorAll('.select-styled');
const subjectCheckboxes = document.querySelectorAll('input[name="subject"]');
const budgetCheckboxes = document.querySelectorAll('input[name="budget"]');
const filterDropdownHandler = (e) => {
    const parentNode = e.target.parentElement;
    const filterContent = parentNode.querySelector('.filter-content-container');
    if(parentNode.classList.contains('active')) {
        parentNode.classList.remove('active');
        filterContent.style.display = 'none';
    } else {
        parentNode.classList.add('active');
        filterContent.style.display = 'block';
    }
}
const contactCheckboxHandler = (e) => {
    let splitValue = '';
    const parentNode = e.target.closest('.filter-type-container');
    const valueInput = parentNode.querySelector('.select-styled');
    const placeholderText = parentNode.querySelector('.select-styled').attributes[2].value;
    const checkedInputs = document.querySelectorAll('input[name="' + e.target.name + '"]:checked');
    if (checkedInputs.length === 1) {
        splitValue = checkedInputs[0].value
        valueInput.textContent = splitValue;
    } else if (checkedInputs.length > 1) {
        checkedInputs.forEach((checkedInput, index) => {
            if(index === 0) {
                splitValue += checkedInput.value
            } else {
                splitValue += ', ' + checkedInput.value
            }
        })
        valueInput.textContent = splitValue;
    } else {
        valueInput.textContent = placeholderText;
    }
}


subjectCheckboxes.forEach(subject => {
    subject.addEventListener('change', contactCheckboxHandler)
})
budgetCheckboxes.forEach(budget => {
    budget.addEventListener('change', contactCheckboxHandler)
})
filterTriggers.forEach(filterTrigger => {
    filterTrigger.addEventListener('click', filterDropdownHandler);
})
document.querySelector('body').addEventListener('click', function(e){
    if(!e.target.closest('.filter-type-container')) {
        const node = document.querySelectorAll('.filter-type-container')
        node.forEach(dropdownItem => {
            dropdownItem.classList.remove('active');
            dropdownItem.querySelector('.filter-content-container').style.display = 'none';
        })
    }
});