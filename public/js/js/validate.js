document.getElementById('emailForm').addEventListener('submit', function(event) {
    const recipientsField = document.getElementById('recipients');
    const emails = recipientsField.value.split(',').map(email => email.trim());
    const invalidEmails = [];

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    emails.forEach(email => {
        if (!emailPattern.test(email)) {
            invalidEmails.push(email);
        }
    });

    if (invalidEmails.length > 0) {
        alert('The following emails are invalid: ' + invalidEmails.join(', '));
        event.preventDefault();  // Stop form submission
    }
});
