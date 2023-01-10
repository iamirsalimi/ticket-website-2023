let $ = document

let signUpInputElems = $.querySelectorAll('.singup-inputs-container input')
let formTarget
let forms = $.querySelectorAll('form')
let formTitle = $.querySelector('.title h2')
let formDesc = $.querySelector('.title p')
let showPass =  $.querySelectorAll('.show-pass i')
let passTarget

function clearSpace(event){
    event.target.value = event.target.value.trim()
}

signUpInputElems.forEach(function(signUpInputElem){
    signUpInputElem.addEventListener('keyup',clearSpace)
})

signUpInputElems[5].addEventListener('blur',function(event){
    let emailValue = event.target.value
    let linkRegex = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/g
    if(linkRegex.test(emailValue)){

        event.target.classList.remove('invalid')
        event.target.parentNode.lastElementChild.classList.remove('show-err')
    } else {
        event.target.classList.add('invalid')
        event.target.parentNode.lastElementChild.classList.add('show-err')
    }
})


signUpInputElems[4].addEventListener('blur',function(event){
    if(event.target.value !== signUpInputElems[3].value){
        signUpInputElems[3].classList.add('invalid')
        signUpInputElems[4].classList.add('invalid')
        event.target.parentNode.lastElementChild.classList.add('show-err')
    } else {

        signUpInputElems[3].classList.remove('invalid')
        signUpInputElems[4].classList.remove('invalid')
        event.target.parentNode.lastElementChild.classList.remove('show-err')
    }
})


// show pass
showPass.forEach(function(showPassElem){
    showPassElem.parentNode.addEventListener('click',function(event){
        passTarget = $.querySelector('.'+event.target.dataset.passtarget)
        if(passTarget.type === 'password'){
            passTarget.type = 'text'
            showPassElem.className = 'fa-solid fa-eye-slash'
        } else {
            passTarget.type = 'password'
            showPassElem.className = 'fa-solid fa-eye'
        }
    })
})

