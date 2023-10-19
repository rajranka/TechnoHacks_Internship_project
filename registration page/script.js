const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function(event) {
    let isValid = true;

    if (username.value.trim() === '') {
        usernameError.textContent = 'Username is required';
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.textContent = 'Invalid email format';
            isValid = false;
        } else {
            emailError.textContent = '';
        }
    }

    if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else {
        // Password length validation
        if (password.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if there are errors
    }
});
