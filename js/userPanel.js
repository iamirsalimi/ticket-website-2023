let $ = document

let menuSections = $.querySelectorAll('section')
let menu = $.querySelectorAll('.userPanel-menu .top-menu li')
let submitBtn = $.querySelector('.submit')
let closeModalBtns = $.querySelectorAll('.close-modalBtn button')
let content = $.querySelector('.container')
let loader = $.querySelector('.loader')
let formInputs = $.querySelectorAll('.user-profile input')
let logoutBtn = $.querySelector('.log-out')
let logoutModal = $.querySelector('.logout-modal')
let logoutCancelBtn = $.querySelector('.logout-modal .cancel-btn')
let targetMenu , targetPasswordInput
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
        menu.forEach(function(menuElement){
            menuElement.classList.remove('active')
        })
        menuSections.forEach(function(menuSection){
            menuSection.style.display = 'none'
        })
        
        event.target.className = 'active'
        if(!event.target.dataset.targetmenu){
            targetMenu = $.querySelector('.' + event.target.parentNode.dataset.targetmenu)
        } else {
            targetMenu = $.querySelector('.' + event.target.dataset.targetmenu)
        }
        targetMenu.removeAttribute('style')
    })
})  

// clear inputs value
function clearInputsValue(){
    formInputs.forEach(function(input){
        if(input.type!== 'submit'){
            input.value = ''
        }
    })
}

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

function increaseTicketCount(event){
    let ticketContainer = event.target.parentNode
    let ticketCountElem = ticketContainer.querySelector('.ticket-counter')
    ticketCountElem.value = +ticketCountElem.value + 1
    ticketCountElem.setAttribute('value',ticketCountElem.value ) 
}

function decreaseTicketCount(event){
    let ticketContainer = event.target.parentNode
    let ticketCountElem = ticketContainer.querySelector('.ticket-counter')
    
    if(+ticketCountElem.innerHTML !== 1){
        if(+ticketCountElem.value > 1){
            ticketCountElem.value = +ticketCountElem.value - 1
            ticketCountElem.setAttribute('value',ticketCountElem.value) 
        }
    }
}