let nameInput = document.getElementById('nameInput')
let lastNameInput = document.getElementById('lastNameInput')
let emailInput = document.getElementById('emailInput')

let errorName = document.getElementById('errorName')
let errorLastname = document.getElementById('errorLastname')
let errorEmail = document.getElementById('errorEmail')

let button = document.getElementById('button')

let menuIcon = document.getElementById('menuIcon');
let headerMenu = document.getElementById('header-menu');
let containerInner = document.getElementById('container-inner');

let nameValue = ''
let lastNameValue = ''
let emailValue = ''

// For name input validation  
let nameValidation = (value) => {
    const nameRegex = /^[A-Z][a-zA-Z]*$/

    if (value === '') {
        errorName.innerText = 'What is your First name?'
    }
    if (!nameRegex.test(value) && value != '') {
        errorName.innerText = 'Your First name must start with a capital letter. There cannot be any number in it.'
    } else if (nameRegex.test(value) && value != '') {
        errorName.innerText = ''
    }
}

// For lastname input validation  
let lastNameValidation = (value) => {
    const nameRegex = /^[A-Z][a-zA-Z]*$/

    if (value === '') {
        errorLastname.innerText = 'What is your Last name?'
    }
    if (!nameRegex.test(value) && value != '') {
        errorLastname.innerText = 'Your Last name must start with a capital letter. There cannot be any number in it.'
    } else if (nameRegex.test(value) && value != '') {
        errorLastname.innerText = ''
    }
}

// For email input validation  
let emailValidation = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (value === '') {
        errorEmail.innerText = 'Please fill your email address.'
    }
    if (!emailRegex.test(value) && value != '') {
        errorEmail.innerText = 'Please enter a valid email address.'
    } else if (emailRegex.test(value) && value != '') {
        errorEmail.innerText = ''
    }
}

nameInput.addEventListener('keyup', (e) => {
    nameValue = e.target.value
})
lastNameInput.addEventListener('keyup', (e) => {
    lastNameValue = e.target.value
})
emailInput.addEventListener('keyup', (e) => {
    emailValue = e.target.value
})

button.addEventListener('click', () => {
    nameValidation(nameValue)
    lastNameValidation(lastNameValue)
    emailValidation(emailValue)
})

let isHeaderOpen = false;

menuIcon.onclick = () => {
    isHeaderOpen ? containerInner.classList.remove("header-container-active") : containerInner.classList.add("header-container-active")
    isHeaderOpen = !isHeaderOpen
}
