let $ = document

let menuItems = $.querySelectorAll('.menu-item')
let searchBtn = $.querySelector('.serachbar span')
let searchInput = $.querySelector('.serachbar input')
let sectionElems = $.querySelectorAll('.content section') 
let menuTitle = $.querySelector('.content-section-title')
let goToCustomers = $.querySelector('.all-users-title button span')
let userTargetMenu


goToCustomers.addEventListener('click',function(event){
    sectionElems.forEach(function(section){
        section.style.display = 'none'
    })
    menuItems.forEach(function(item){
        item.classList.remove('active')
    })

    sectionElems[1].removeAttribute('style')
    menuItems[1].classList.add('active')
    menuTitle.innerHTML = '<h2>Outinz Customers  <span>List</span></h2>'
})


menuItems.forEach(function(menuItem){
    menuItem.addEventListener('click',function(event){
        sectionElems.forEach(function(section){
            section.style.display = 'none'
        })
        menuItems.forEach(function(item){
            item.classList.remove('active')
        })

        event.target.classList.add('active')
        userTargetMenu = $.querySelector('.'+ event.target.dataset.class)
        userTargetMenu.removeAttribute('style')

        if(userTargetMenu.className === 'dashboard-content'){
            menuTitle.innerHTML = '<h2>Outinz users <span>overview</span></h2>'
        }else if(userTargetMenu.className === 'customers-content'){
            menuTitle.innerHTML = '<h2>Outinz Customers  <span>List</span></h2>'
        }
    })
})

searchInput.addEventListener('keyup',function(event){
    let users = $.querySelectorAll('tbody tr')
    users.forEach(function(user){
        if(user.children[3].innerHTML.indexOf(event.target.value.trim()) === -1){
            user.style.display = 'none'
        } else {
            user.style.display = 'table-row'
        }
    })
})