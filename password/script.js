const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const strengthIndicator = document.getElementById('strengthIndicator');
const confirmError = document.getElementById('confirmError');
const lengthReq = document.getElementById('lengthReq');
const uppercaseReq = document.getElementById('uppercaseReq');
const lowercaseReq = document.getElementById('lowercaseReq');
const numberReq = document.getElementById('numberReq');
const specialReq = document.getElementById('specialReq');

const requirements = [
    { regex: /.{8,}/, element: lengthReq },
    { regex: /[A-Z]/, element: uppercaseReq },
    { regex: /[a-z]/, element: lowercaseReq },
    { regex: /[0-9]/, element: numberReq },
    { regex: /[^A-Za-z0-9]/, element: specialReq }
];

passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;
    let strength = 0;

    requirements.forEach(req => {
        if (req.regex.test(value)) {
            req.element.querySelector('i').className = 'fas fa-check';
            req.element.querySelector('i').style.color='green';
            strength++;
        } else {
            req.element.querySelector('i').className = 'fas fa-times';
            req.element.querySelector('i').style.color='red';
        }
    });

    if (strength <= 1) {
        strengthIndicator.className = 'strength-indicator weak';
        strengthIndicator.innerHTML="WEAK";
    } else if (strength <= 3) {
        strengthIndicator.className = 'strength-indicator moderate';
        strengthIndicator.innerHTML="Medium";
    } else {
        strengthIndicator.className = 'strength-indicator strong';
        strengthIndicator.innerHTML="Strong";
    }
});

confirmPasswordInput.addEventListener('input', () => {
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmError.textContent = 'Passwords do not match';
    } else {
        confirmError.textContent = '';
    }
});

document.getElementById('registrationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmError.textContent = 'Passwords do not match';
    } else {
        confirmError.textContent = '';
        alert('Registration successful!');
    }
});