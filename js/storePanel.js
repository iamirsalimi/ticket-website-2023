let $ = document

let menuSections = $.querySelectorAll('section')
let menu = $.querySelectorAll('.storePanel-menu .top-menu li')
let targetMenu , targetPasswordInput
let closeModalBtns = $.querySelectorAll('.close-modalBtn button')
let submitBtn = $.querySelector('.submit')
let emailInput = $.querySelector('.input .email-input')
let content = $.querySelector('.container')
let loader = $.querySelector('.loader')
let formInputs = $.querySelectorAll('.store-profile input')
let searchInput = $.querySelector('.search-input input')
let logoutBtn = $.querySelector('.log-out')
let logoutModal = $.querySelector('.logout-modal')
let logoutCancelBtn = $.querySelector('.logout-modal .cancel-btn')

// onload

window.addEventListener('DOMContentLoaded',function(){
    menu.forEach(function(menuElement){
        menuElement.classList.remove('active')
    })
    
    menuSections.forEach(function(menuSection){
        menuSection.style.display = 'none'
    })

    menu[0].className = 'active'
    menuSections[0].removeAttribute('style')
})

window.addEventListener('load',function(){
    content.removeAttribute('style')
    setTimeout(function(){
        loader.classList.add('hidden')
        setTimeout(function(){
            loader.style.display = 'none'
        },1000)
    },500)
})

// menu
menu.forEach(function(menuElem){
    menuElem.addEventListener('click',function(event){
        let prevMenuLi = $.querySelector('.storePanel-menu .top-menu li.active')
        prevMenuLi.classList.remove('active')
        menuSections.forEach(function(menuSection){
            menuSection.style.display = 'none'
        })
        
        event.target.className = 'active'
        if(!event.target.dataset.targetmenu){
            targetMenu = $.querySelector('.' + event.target.parentNode.dataset.targetmenu)
        } else {
            targetMenu = $.querySelector('.' + event.target.dataset.targetmenu)
        }

        if(targetMenu.className === 'store-purchased-tickets'){
            searchInput.parentNode.style.display = 'inline'
        } else {
            searchInput.parentNode.style.display = 'none' 
        }

        targetMenu.removeAttribute('style')
    })
})  


// check email
function checkEmail(emailValue){
    if(!emailValue.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{3}$/) ){
        modal.firstElementChild.style.display = 'none'
        modal.lastElementChild.style.display = 'flex'
        let emailErr = modal.querySelectorAll('.message')
        emailErr[1].innerHTML = 'Email is incorrect . please enter a valid Email'
        modal.style.background = '#f0f0f0'
        return false
    }

    
    modal.lastElementChild.style.display = 'none'
    modal.firstElementChild.style.display = 'flex'
    modal.style.background = '#fff'
    let emailErr = modal.querySelectorAll('.message')
    emailErr[0].innerHTML = 'The information was saved successfully'
    clearInputsValue()
}

// clear inputs value
function clearInputsValue(){
    formInputs.forEach(function(input){
        if(input.type!== 'submit'){
            input.value = ''
        }
    })
}


// search
searchInput.addEventListener('keyup',function(){
    let usernames = $.querySelectorAll('.container .content .store-purchased-tickets .username')
    usernames.forEach(function(username){
        if(username.innerHTML.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase().trim())){
            username.parentNode.style.display = 'table-row'
        } else {
            username.parentNode.style.display = 'none'
        }
    })
})

// show and hide logout modal
logoutBtn.addEventListener('click',function(){
    logoutModal.classList.add('active')
})

logoutCancelBtn.addEventListener('click',function(){
    logoutModal.classList.remove('active')
})


// show and hide Modal
closeModalBtns.forEach(function(closeModalBtn){
    closeModalBtn.addEventListener('click',function(){
        closeModalBtn.parentNode.parentNode.parentNode.classList.remove('active')
    })
})

submitBtn.addEventListener('click',function(event){
    event.preventDefault()
})