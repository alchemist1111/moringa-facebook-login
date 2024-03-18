 // JavaScript code here
 document.addEventListener('DOMContentLoaded', function() {
    // Accessing the form element
    var form = document.querySelector('form');

    // Adding event listener to the form
    form.addEventListener('submit', function(event) {
        // Preventing the default form submission
        event.preventDefault();

        // Accessing the input fields
        var emailInput = document.querySelector('input[type="email"]');
        var passwordInput = document.querySelector('input[type="password"]');

        // Getting the values of email and password inputs
        var email = emailInput.value;
        var password = passwordInput.value;

        // You can perform further operations like validation, sending data to server, etc.
        console.log("Email:", email);
        console.log("Password:", password);

        // Resetting the form after submission (optional)
        form.reset();
    });
});