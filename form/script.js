
        const form = document.getElementById('registrationForm');
        const fullName = document.getElementById('fullName');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const phone = document.getElementById('phone');
        const submitBtn = document.getElementById('submitBtn');

        const fullNameError = document.getElementById('fullNameError');
        const emailError = document.getElementById('emailError');
        const emailValid = document.getElementById('emailValid');
        const passwordError = document.getElementById('passwordError');
        const passwordStrength = document.getElementById('passwordStrength');
        const phoneError = document.getElementById('phoneError');
        const passwordTooltip = document.getElementById('passwordTooltip');

        const fullNameRegex = /^[A-Za-z\s]{3,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const phoneRegex = /^\d{10}$/;

        fullName.addEventListener('keyup', () => {
            if (fullNameRegex.test(fullName.value)) {
                fullNameError.style.display = 'none';
            } else {
                fullNameError.style.display = 'block';
            }
        });

        email.addEventListener('keyup', () => {
            if (emailRegex.test(email.value)) {
                emailError.style.display = 'none';
                emailValid.style.display = 'block';
            } else {
                emailError.style.display = 'block';
                emailValid.style.display = 'none';
            }
        });

        password.addEventListener('keyup', () => {
            if (passwordRegex.test(password.value)) {
                passwordError.style.display = 'none';
            } else {
                passwordError.style.display = 'block';
            }

            if (password.value.length < 8) {
                passwordStrength.textContent = 'Weak';
                passwordStrength.style.color = 'red';
            } else if (password.value.length < 12) {
                passwordStrength.textContent = 'Moderate';
                passwordStrength.style.color = 'orange';
            } else {
                passwordStrength.textContent = 'Strong';
                passwordStrength.style.color = 'green';
            }
        });

        password.addEventListener('mouseover', () => {
            passwordTooltip.classList.add('tooltip-visible');
        });

        password.addEventListener('mouseout', () => {
            passwordTooltip.classList.remove('tooltip-visible');
        });

        phone.addEventListener('keyup', () => {
            if (phoneRegex.test(phone.value)) {
                phoneError.style.display = 'none';
            } else {
                phoneError.style.display = 'block';
            }
        });

        submitBtn.addEventListener('mouseover', () => {
            if (!fullNameRegex.test(fullName.value) || !emailRegex.test(email.value) || !passwordRegex.test(password.value) || !phoneRegex.test(phone.value)) {
                submitBtn.style.backgroundColor = 'red';
                submitBtn.title = 'Please fill out all fields correctly.';
            } else {
                submitBtn.style.backgroundColor = 'green';
                submitBtn.title = '';
            }
        });

        submitBtn.addEventListener('mouseout', () => {
            submitBtn.style.backgroundColor = '#007bff';
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (fullNameRegex.test(fullName.value) && emailRegex.test(email.value) && passwordRegex.test(password.value) && phoneRegex.test(phone.value)) {
                alert('Form submitted successfully!');
            } else {
                alert('Please fill out all fields correctly.');
            }
        });
  