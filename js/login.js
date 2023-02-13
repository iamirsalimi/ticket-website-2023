
let showPassIcon = document.querySelector('.show-pass-icon')
let hidePassIcon = document.querySelector('.hide-pass-icon')
let passInput = document.querySelector('.password-input')

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