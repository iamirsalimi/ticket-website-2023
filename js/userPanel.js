let $ = document

let menuSections = $.querySelectorAll('section')
let menu = $.querySelectorAll('.userPanel-menu .top-menu li')

// menu

menu.forEach(function(menuElem){
    menuElem.addEventListener('click',function(event){
        menu.forEach(function(menuElement){
            menuElement.classList.remove('active')
            console.log(menuElement)
        })
        menuSections.forEach(function(menuSection){
            menuSection.style.display = 'none'
        })
        
        event.target.className = 'active'
        console.log(event.target.dataset.targetmenu)
        targetMenu = $.querySelector('.' + event.target.dataset.targetmenu)
        targetMenu.removeAttribute('style')
    })
})