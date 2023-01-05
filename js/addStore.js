let $ = document

let emailInput = $.querySelector('.store-email')
let passInputs = $.querySelectorAll('.pass-input')
let showPass = $.querySelectorAll('.show-pass span')

let passInput
// checking Email 
function checkEmail(event){
    let emailValue = event.target.value.trim()
    let emailErr = event.target.parentNode.lastElementChild
    let submitBtn = event.target.parentNode.parentNode.parentNode.lastElementChild
    console.log( emailErr.parentNode)
    if(!emailValue.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailErr.innerHTML = 'Please enter a Valid Email'
        emailErr.parentNode.classList.add('invalid')
        submitBtn.setAttribute('disabled', 'disabled')
        return false
    }
    
    emailErr.innerHTML = ''
    emailErr.parentNode.classList.remove('invalid')
    submitBtn.removeAttribute('disabled')
}

// checking Paswwords

function checkPassword(event){
    let passErr = passInputs[1].parentNode.lastElementChild
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
showPass.forEach(function(showPassElem){
    showPassElem.parentNode.addEventListener('click',function(event){
        //get passInput from target show passBtn
        passInput = event.target.parentNode.querySelector('input') 
        
        if(passInput.type === 'password'){
            passInput.type = 'text'
            showPassElem.innerHTML = 'visibility_off'
        } else {
            passInput.type = 'password'
            showPassElem.innerHTML = 'visibility'
        }
    })
})


passInputs.forEach(function(passInput){
    passInput.addEventListener('keyup',checkPassword)
})
emailInput.addEventListener('keyup',checkEmail)