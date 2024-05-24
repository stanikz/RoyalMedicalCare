document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        clearErrorMessages(); // Clear existing error messages
        if (!validateForm()) {
            event.preventDefault(); // Prevent the form from submitting if validation fails
        }
    });
});

function validateForm() {
    var name = document.getElementById("name").value;
    var personnr = document.getElementById("personnr").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.trim() === "") {
        showErrorMessage("nameError", true, "Please enter your name.");
        return false;
    }

    if (personnr.trim() === "") {
        showErrorMessage("personnrError", true, "Please enter your personnummer.");
        return false;
    }

    if (email.trim() === "") {
        showErrorMessage("emailError", true, "Please enter your email address.");
        return false;
    }

    if (message.trim() === "") {
        showErrorMessage("messageError", true, "Please enter your message.");
        return false;
    }

    // Add more validation if needed

    return true;
}

function showErrorMessage(errorElementId, isVisible, message) {
    var errorElement = document.getElementById(errorElementId);

    // Toggle the visibility of the error message
    errorElement.innerHTML = '<span style="color: red; font-size: 80%; margin-top: 5px;">' + message + '</span>';
    errorElement.style.display = isVisible ? 'block' : 'none';
}

function clearErrorMessages() {
    // Clear all existing error messages
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (error) {
        error.style.display = 'none';
    });
}
