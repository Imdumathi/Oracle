document.addEventListener('DOMContentLoaded', () => {
    const contactButtons = document.querySelectorAll('.contact-button');
    const contactFormSection = document.getElementById('contactFormSection');
    const contactForm = document.querySelector('.contact-form');
    const closeFormButton = document.querySelector('.close-form-button');

    // Function to show the contact form
    function showContactForm() {
        contactFormSection.style.display = 'block';
        contactFormSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the form
    }

    // Function to hide the contact form and reset it
    function hideContactForm() {
        contactFormSection.style.display = 'none';
        contactForm.reset(); // Clear form fields
    }

    // Add event listeners to all "Contact" buttons
    contactButtons.forEach(button => {
        button.addEventListener('click', showContactForm);
    });

    // Add event listener to the "Close" button on the form
    closeFormButton.addEventListener('click', hideContactForm);

    // Optional: Add form submission handler (for demonstration, it just hides the form)
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // In a real application, you would send this data to a server
        // using Fetch API or XMLHttpRequest.
        alert('Message sent! (This is a demo, no actual submission)');
        hideContactForm(); // Hide the form after "submission"
    });
});
