document.addEventListener('DOMContentLoaded', () => {
    const contactButtons = document.querySelectorAll('.contact-button');
    const contactFormSection = document.getElementById('contactFormSection');
    const contactForm = document.querySelector('.contact-form');
    const closeFormButton = document.querySelector('.close-form-button');

    // Get input elements and their error message spans
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Function to show the contact form
    function showContactForm() {
        contactFormSection.style.display = 'block';
        contactFormSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the form
        resetFormValidation(); // Clear any previous validation messages/styles
    }

    // Function to hide the contact form and reset it
    function hideContactForm() {
        contactFormSection.style.display = 'none';
        contactForm.reset(); // Clear form fields
        resetFormValidation(); // Clear any previous validation messages/styles
    }

    // Function to reset form validation states
    function resetFormValidation() {
        fullNameInput.classList.remove('invalid');
        emailInput.classList.remove('invalid');
        messageInput.classList.remove('invalid');

        fullNameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
    }

    // Function to validate a single input
    function validateInput(inputElement, errorElement, errorMessage) {
        if (inputElement.value.trim() === '') {
            inputElement.classList.add('invalid');
            errorElement.textContent = errorMessage;
            return false;
        } else {
            inputElement.classList.remove('invalid');
            errorElement.textContent = '';
            return true;
        }
    }

    // Function to validate email format
    function validateEmail(inputElement, errorElement, errorMessage) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(inputElement.value.trim())) {
            inputElement.classList.add('invalid');
            errorElement.textContent = errorMessage;
            return false;
        } else {
            inputElement.classList.remove('invalid');
            errorElement.textContent = '';
            return true;
        }
    }

    // Master validation function for the entire form
    function validateForm() {
        let isValid = true;

        // Validate Full Name
        if (!validateInput(fullNameInput, fullNameError, 'Full Name is required.')) {
            isValid = false;
        }

        // Validate Email
        if (!validateInput(emailInput, emailError, 'Email is required.')) {
            isValid = false;
        } else if (!validateEmail(emailInput, emailError, 'Please enter a valid email address.')) {
            isValid = false;
        }

        // Validate Message
        if (!validateInput(messageInput, messageError, 'Message cannot be empty.')) {
            isValid = false;
        }

        return isValid;
    }

    // Add event listeners to all "Contact" buttons
    contactButtons.forEach(button => {
        button.addEventListener('click', showContactForm);
    });

    // Add event listener to the "Close" button on the form
    closeFormButton.addEventListener('click', hideContactForm);

    // Add input event listeners for real-time feedback
    fullNameInput.addEventListener('input', () => validateInput(fullNameInput, fullNameError, 'Full Name is required.'));
    emailInput.addEventListener('input', () => {
        if (emailInput.value.trim() !== '') {
            validateEmail(emailInput, emailError, 'Please enter a valid email address.');
        } else {
            emailError.textContent = ''; // Clear error if input becomes empty
            emailInput.classList.remove('invalid');
        }
    });
    messageInput.addEventListener('input', () => validateInput(messageInput, messageError, 'Message cannot be empty.'));


    // Form submission handler with validation
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        if (validateForm()) {
            // If the form is valid, proceed with submission (e.g., send data to server)
            alert('Form submitted successfully! (This is a demo)');
            // In a real application, you would send this data to a server
            // using Fetch API or XMLHttpRequest.
            hideContactForm(); // Hide the form after successful submission
        } else {
            // If validation fails, alert the user (or just let the error messages do the talking)
            alert('Please correct the errors in the form.');
        }
    });
});
