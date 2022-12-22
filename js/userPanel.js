let $ = document

let menuSections = $.querySelectorAll('section')
let menu = $.querySelectorAll('.userPanel-menu .top-menu li')
let showPassBtn = $.querySelector('.show-pass') 
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


// show pass
showPassBtn.addEventListener('click',function(event){
    targetPasswordInput = event.target.parentNode.querySelector('input')        
    
    if(targetPasswordInput.type === 'password'){
        targetPasswordInput.type = 'text'
        showPassBtn.innerHTML = 'visibility_off'
    } else {
        targetPasswordInput.type = 'password'
        showPassBtn.innerHTML = 'visibility'
    }
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