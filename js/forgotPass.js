let passInput = document.querySelector('.pass-input input')
let showPassIcon = document.querySelector('.pass-input .show-pass-icon')
let hidePassIcon = document.querySelector('.pass-input .hide-pass-icon')
let rPassInput = document.querySelector('.repeat-pass-input input')
let rShowPassIcon = document.querySelector('.repeat-pass-input .show-pass-icon')
let rHidePassIcon = document.querySelector('.repeat-pass-input .hide-pass-icon')

passInput.addEventListener('keyup',function(event){
    if(event.target.value !== rPassInput.value){
        rPassInput.classList.add('invalid')
        passInput.classList.add('invalid')
        rPassInput.parentNode.querySelector('p').classList.add('show-err')
    } else if(event.target.value === '' && rPassInput.value === ''){
        rPassInput.classList.remove('invalid')
        passInput.classList.remove('invalid')
        rPassInput.parentNode.querySelector('p').classList.remove('show-err')
    } else {
        rPassInput.classList.remove('invalid')
        passInput.classList.remove('invalid')
        rPassInput.parentNode.querySelector('p').classList.remove('show-err')
    }
})

rPassInput.addEventListener('keyup',function(event){
    if(event.target.value !== passInput.value){
        rPassInput.classList.add('invalid')
        passInput.classList.add('invalid')
        rPassInput.parentNode.querySelector('p').classList.add('show-err')
    } else if(event.target.value === '' && passInput.value === ''){
        rPassInput.classList.remove('invalid')
        passInput.classList.remove('invalid')
        rPassInput.parentNode.querySelector('p').classList.remove('show-err')
    } else {

        rPassInput.classList.remove('invalid')
        passInput.classList.remove('invalid')
        rPassInput.parentNode.querySelector('p').classList.remove('show-err')
    }
})

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
