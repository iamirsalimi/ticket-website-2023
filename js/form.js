let $ = document

let signUpInputElems = $.querySelectorAll('.singup-inputs-container input')
let forms = $.querySelectorAll('form')
let formTitle = $.querySelector('.title h2')
let formDesc = $.querySelector('.title p')
let showPassIcon = document.querySelector('.pass-input .show-pass-icon')
let hidePassIcon = document.querySelector('.pass-input .hide-pass-icon')
let passInput = document.querySelector('.pass-input input')
let rShowPassIcon = document.querySelector('.repeat-pass-input .show-pass-icon')
let rHidePassIcon = document.querySelector('.repeat-pass-input .hide-pass-icon')
let rPassInput = document.querySelector('.repeat-pass-input input')
let closeModalBtn = $.querySelector('.close-btn')
let modal = $.querySelector('.modal') 
let formTarget , passTarget

function clearSpace(event){
    event.target.value = event.target.value.trim()
}

signUpInputElems.forEach(function(signUpInputElem){
    signUpInputElem.addEventListener('keyup',clearSpace)
})

signUpInputElems[5].addEventListener('blur',function(event){
    let emailValue = event.target.value.trim()
    let linkRegex = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/g
    if(linkRegex.test(emailValue) || emailValue === ''){
        event.target.classList.remove('invalid')
        event.target.parentNode.lastElementChild.classList.remove('show-err')
    } else {
        event.target.classList.add('invalid')
        event.target.parentNode.lastElementChild.classList.add('show-err')
    }
})


signUpInputElems[4].addEventListener('keyup',function(event){
    if(event.target.value !== signUpInputElems[3].value){
        signUpInputElems[3].classList.add('invalid')
        signUpInputElems[4].classList.add('invalid')
        event.target.parentNode.querySelector('p').classList.add('show-err')
    } else {

        signUpInputElems[3].classList.remove('invalid')
        signUpInputElems[4].classList.remove('invalid')
        event.target.parentNode.querySelector('p').classList.remove('show-err')
    }
})

signUpInputElems[3].addEventListener('keyup',function(event){
    if(event.target.value !== signUpInputElems[4].value){
        signUpInputElems[3].classList.add('invalid')
        signUpInputElems[4].classList.add('invalid')
        signUpInputElems[4].parentNode.querySelector('p').classList.add('show-err')
    } else {

        signUpInputElems[3].classList.remove('invalid')
        signUpInputElems[4].classList.remove('invalid')
        signUpInputElems[4].parentNode.querySelector('p').classList.remove('show-err')
    }
})

// close Modal
closeModalBtn.addEventListener('click', function(){
    modal.classList.remove('active')
})

// show pass
showPassIcon.addEventListener('click',function(){
    hidePassIcon.removeAttribute('style')
    showPassIcon.style.display = 'none'
    passInput.type = 'text'
})

hidePassIcon.addEventListener('click',function(){
    showPassIcon.removeAttribute('style')
    hidePassIcon.style.display = 'none'
    passInput.type = 'password'
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
