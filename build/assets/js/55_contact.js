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

const FORM = document.getElementById('contact-page-form');
if(FORM) {
    const SUBMIT_BUTTON = document.getElementById('submit-form-btn')
    const email = FORM.querySelector('#email');
    const name = FORM.querySelector('#name');
    const message = FORM.querySelector('#message');
    const project = FORM.querySelector('#what-need');
    const budget = FORM.querySelector('#budget-inp');

    const validationInput = document.querySelectorAll('.valid-input');
    const likeAnimationElement = document.getElementById('like');
    const successWrapper = document.querySelector('.success-form-wrapper');
    const cursorEl = document.querySelector('.cursor');
    SUBMIT_BUTTON.addEventListener( 'click', function(e) {
        e.preventDefault();
        const formData = {
            email: email ? email.value : '',
            name: name ? name.value : '',
            message: message ? message.value : '',
            project: project.textContent === 'I need ...' ? 'Unset' : project.textContent,
            budget: budget.textContent === 'Project budget' ? 'Unset' : budget.textContent
        }
        if(formData.email !== '' && formData.name !== '' && formData.message !== '' && IsEmail(formData.email)) {
            sendData( formData );
        } else {
            fieldsValidation(formData.email, email, 'email');
            fieldsValidation(formData.name, name, 'name');
            fieldsValidation(formData.message, message, 'message');
        }
    })
    email.addEventListener('keyup', (e) => fieldsValidation(e.target.value, email, 'email'));
    validationInput.forEach(input => {
        input.addEventListener('keyup', (e) => fieldsValidation(e.target.value, input))
    });
    successWrapper.addEventListener('click', () => {
        successWrapper.classList.remove('active');
        cursorEl.classList.remove('cursor-close');
        contactFormClear()
    })

    function contactFormClear() {
        email.value = '';
        name.value = '';
        project.textContent = 'I need ...';
        budget.textContent = 'Project budget';
        message.value = ''
    }
    function fieldsValidation(value, element, key = null) {
        let errorMessage = 'Required field';
        if(!value || value === '') {
            element.parentElement.classList.add('error');
            element.parentElement.querySelector('.error-message').textContent = errorMessage;
        } else if(key && key === 'email' && !IsEmail(value)) {
            element.parentElement.classList.add('error');
            element.parentElement.querySelector('.error-message').textContent = 'Wrong Email';
        } else {
            element.parentElement.classList.remove('error');
            element.parentElement.querySelector('.error-message').textContent = '';
        }
    }

    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function sendData( data ) {
        console.log( 'Sending data' );
        const XHR = new XMLHttpRequest();

        let urlEncodedData = "",
            urlEncodedDataPairs = [],
            name;

        // Turn the data object into an array of URL-encoded key/value pairs.
        for( name in data ) {
            urlEncodedDataPairs.push( encodeURIComponent( name ) + '=' + encodeURIComponent( data[name] ) );
        }

        // Combine the pairs into a single string and replace all %-encoded spaces to
        // the '+' character; matches the behaviour of browser form submissions.
        urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );

        // Define what happens on successful data submission
        XHR.addEventListener( 'load', function(event) {
            cursorEl.classList.add('cursor-close');
            successWrapper.classList.add('active');

            let animation  = bodymovin.loadAnimation({
                container: likeAnimationElement,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: '/assets/animation/like-animation/data.json'
            });
            setTimeout(function () {
                if(likeAnimationElement) {
                    animation.play();
                }
            }, 500)
        } );

        // Define what happens in case of error
        XHR.addEventListener( 'error', function(event) {
            console.log( 'Oops! Something went wrong.' );
        } );

        // Set up our request
        XHR.open( 'POST', 'https://tino.design/mail-contact' );

        // Add the required HTTP header for form data POST requests
        XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

        // Finally, send our data.
        XHR.send( urlEncodedData );
    }
}