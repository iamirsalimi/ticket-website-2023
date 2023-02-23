
let showPassIcon = document.querySelector('.show-pass-icon')
let hidePassIcon = document.querySelector('.hide-pass-icon')
let passInput = document.querySelector('.password-input')
let closeModalBtn = document.querySelector('.close-btn')
let modal = document.querySelector('.modal') 

// show and hide password
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

// close Modal
closeModalBtn.addEventListener('click', function(){
    modal.classList.remove('active')
})