const loginForm = document.querySelector('#loginFormElement')
const registerForm = document.querySelector('#registerFormElement')

function validateInput(inputElement, isValid, message) {
    const invalidFeedback = inputElement.nextElementSibling

    if (inputElement.type === 'radio' && inputElement.name === 'registerGender' && !isValid) {
        const feedbackElements = inputElement[inputElement.length - 1].nextElementSibling
        feedbackElements.innerHTML = message
        return false
    }

    if (inputElement.type === 'radio' && inputElement.name === 'registerGender' && isValid) {
        const feedbackElements = inputElement[inputElement.length - 1].nextElementSibling
        feedbackElements.innerHTML = ''
        return true
    }

    if (isValid) {
        inputElement.classList.add('is-valid')
        inputElement.classList.remove('is-invalid')

        invalidFeedback.innerHTML = ''

        return true
    } else {
        inputElement.classList.remove('is-valid')
        inputElement.classList.add('is-invalid')

        invalidFeedback.innerHTML = message

        return false
    }
}

function toggleSubmitButton(formElement, isFormValid) {
    const btn = formElement['submitButton']

    if (formElement.checkValidity() && isFormValid) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }
}

registerForm.addEventListener('change', (e) => {
    e.preventDefault()

    // get user info
    const username = registerForm['registerUsername']
    const email = registerForm['registerEmail']
    const country = registerForm['registerCountry']
    const terms = registerForm['registerTerms']
    const password = registerForm['registerPassword']
    const confirmPassword = registerForm['registerConfirmPassword']
    const gender = registerForm['registerGender']
    const btn = registerForm['registerSubmitButton']
    const successAlert = document.querySelector('.alert-success')
    const errorAlert = document.querySelector('.alert-danger')

    let isGenderSelected = Array.from(gender).some(r => r.checked)

    let isFormValid = validateInput(username, username.value.length >= 4 && username.value.trim() !== '', 'Username must be at least 5 characters long and not empty')
                                && validateInput(email, email.value.includes('@') && email.value.includes('.'), 'Email must be a valid email address')
                                && validateInput(country, country.value !== '', 'You must select a country')
                                && validateInput(gender, isGenderSelected, 'You must select a gender')
                                && terms.checked
                                && validateInput(password, password.value.length >= 5, 'Password must be at least 5 characters long')
                                && validateInput(confirmPassword, confirmPassword.value === password.value && confirmPassword.value.trim() !== '', 'Passwords do not match')

    if (isFormValid) {
        successAlert.classList.remove('d-none')
        errorAlert.classList.add('d-none')
    } else {
        successAlert.classList.add('d-none')
        errorAlert.classList.remove('d-none')
    }

    toggleSubmitButton(registerForm, isFormValid)

})