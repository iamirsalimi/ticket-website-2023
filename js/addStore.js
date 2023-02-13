let $ = document

let emailInput = $.querySelector('.store-email')
let passInputs = $.querySelectorAll('.pass-input')
let showPass = $.querySelectorAll('.show-pass span')
let showPassIcon = document.querySelector('.pass-input-container .show-pass-icon')
let hidePassIcon = document.querySelector('.pass-input-container .hide-pass-icon')
let passInputElem = document.querySelector('.pass-input-container input')
let rShowPassIcon = document.querySelector('.repeat-pass-input-container .show-pass-icon')
let rHidePassIcon = document.querySelector('.repeat-pass-input-container .hide-pass-icon')
let rPassInput = document.querySelector('.repeat-pass-input-container input')
let passInput
// checking Email 
emailInput.addEventListener('keyup',function(event){
    let emailValue = event.target.value.trim()
    let linkRegex = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{3})+$/g
    if(linkRegex.test(emailValue) || emailValue === ''){
        event.target.parentNode.classList.remove('invalid')
    } else {
        event.target.parentNode.classList.add('invalid')
    }
})

// checking Paswwords

function checkPassword(event){
    let passErr = passInputs[1].parentNode.querySelector('p')
    console.log(passErr)
    let submitBtn = event.target.parentNode.parentNode.parentNode.lastElementChild

    if(passInputs[0].value !== passInputs[1].value){
        passErr.parentNode.classList.add('invalid')
        passInputs[0].parentNode.classList.add('invalid')
        passErr.innerHTML = 'The Passwords aren\'t same'
        submitBtn.setAttribute('disabled', 'disabled')
        return false
    }
    
    passInputs[0].parentNode.classList.remove('invalid')
    passErr.parentNode.classList.remove('invalid')
    passErr.innerHTML = ''
    submitBtn.removeAttribute('disabled')
}

// show and hide password 
showPassIcon.addEventListener('click',function(){
    hidePassIcon.removeAttribute('style')
    showPassIcon.style.display = 'none'
    passInputElem.type = 'text'
})

hidePassIcon.addEventListener('click',function(){
    showPassIcon.removeAttribute('style')
    hidePassIcon.style.display = 'none'
    passInputElem.type = 'password'
})

rShowPassIcon.addEventListener('click',function(){
    rHidePassIcon.removeAttribute('style')
    rShowPassIcon.style.display = 'none'
    rPassInput.type = 'text'
})

rHidePassIcon.addEventListener('click',function(){
    rShowPassIcon.removeAttribute('style')
    rHidePassIcon.style.display = 'none'
    rPassInput.type = 'password'
})


passInputs.forEach(function(passInput){
    passInput.addEventListener('keyup',checkPassword)
})