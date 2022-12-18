let $ = document

let menuItems = $.querySelectorAll('.menuList li')
let searchBtn = $.querySelector('.serachbar span')

let searchInputs = $.querySelectorAll('.serachbar input')


let sectionElems = $.querySelectorAll('.content section') 
let menuTitle = $.querySelector('.content-section-title')
let goToCustomers = $.querySelector('.all-users-title button span')
let goToTickets = $.querySelector('.recent-purchases-title button span')

let linkRegex = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/g
let storeEmailInput = $.querySelector('.store-email')

let sectionSeps = $.querySelectorAll('.menuItem-sectionSep .SectionSep')
let sectionSepContainer = $.querySelector('.menuItem-sectionSep')
let addSeps = $.querySelectorAll('.menuItem-sectionSep .addStore-tickets input')

let addForms = $.querySelectorAll('.add-content form')

let showPass =  $.querySelector('.show-pass span')
let adminPassInput = $.getElementById('admin-password')
let adminEmailInput = $.getElementById('admin-email')
let userTargetMenu , userTargetSep , targetSepElem , usernames






// functions
function clearInputsValueHandler(){
    let inputs = $.querySelectorAll('input')
    inputs.forEach(function(input){
        if(input.type !== 'submit'){
            input.value = ''
        }
    })
}




// show and hide password 
showPass.parentNode.addEventListener('click',function(event){
    if(adminPassInput.type === 'password'){
        adminPassInput.type = 'text'
        showPass.innerHTML = 'visibility_off'
    } else {
        adminPassInput.type = 'password'
        showPass.innerHTML = 'visibility'
    }
})

function checkEmail(event){
    let emailValue = event.target.value.trim()
    if(linkRegex.test(emailValue)){
        event.target.parentNode.lastElementChild.classList.remove('show-err')
    } else {
        event.target.parentNode.lastElementChild.classList.add('show-err')
    }
}

// load 
window.addEventListener('DOMContentLoaded',function(){
    sectionElems.forEach(function(section){
        section.style.display = 'none'
    })
    
    menuItems.forEach(function(item){
        item.classList.remove('active')
    })

    menuItems[0].classList.add('active')
    $.querySelector('.dashboard-content').removeAttribute('style')
    menuTitle.innerHTML = '<h2>Outinz users <span>overview</span></h2>'
    clearInputsValueHandler()
})




// sections seps
addSeps.forEach(function(addSep){
    addSep.addEventListener('click',function(event){
        
        console.log(event.target.nextElementSibling.dataset.septarget)
        let userTargetElem = $.querySelector('.add-content .'+ event.target.nextElementSibling.dataset.septarget)
        console.log(userTargetElem)
        addForms.forEach(function(addForm){
            addForm.style.display = 'none'
        })
        userTargetElem.style.display = 'block'
    })
})

// dashboard short cut
goToTickets.addEventListener('click',function(event){
    sectionElems.forEach(function(section){
        section.style.display = 'none'
    })
    menuItems.forEach(function(item){
        item.classList.remove('active')
    })
    
    sectionElems[3].removeAttribute('style')
    menuItems[3].classList.add('active')
    menuTitle.innerHTML = '<h2>Outinz Tickets  <span>List</span></h2>'
})
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

// menu 
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

        userTargetSep = event.target.dataset.sep

        if(userTargetSep !== 'none' && userTargetSep !== null){
            targetSepElem = $.querySelector('.menuItem-sectionSep .'+userTargetSep)
            sectionSeps.forEach(function(sectionSep){
                sectionSep.style.display = 'none';
            })
            sectionSepContainer.style.display = 'block'
            targetSepElem.style.display = 'block'
        } else {
            sectionSepContainer.style.display = 'none'
            sectionSepContainer.style.display = 'none'
        }


        if(userTargetMenu.className === 'dashboard-content'){
            menuTitle.innerHTML = '<h2>Outinz users <span>overview</span></h2>'
        } else if(userTargetMenu.className === 'customers-content'){
            menuTitle.innerHTML = '<h2>Outinz Customers  <span>List</span></h2>'
        } else if(userTargetMenu.className === 'stores-content'){
            menuTitle.innerHTML = '<h2>Outinz Stores  <span>List</span></h2>'
        } else if(userTargetMenu.className === 'tickets-content'){
            menuTitle.innerHTML = '<h2>Outinz Tickets  <span>List</span></h2>'
        } else if(userTargetMenu.className === 'add-content'){
            menuTitle.innerHTML = '<h2>Outinz add Store and Tickets<span> section</span></h2>'
        } else {
            menuTitle.innerHTML = '<h2>Outinz Admin Profile <span> section</span></h2>'
        }
    })
})


// search input
searchInputs.forEach(function(searchInput){
    searchInput.addEventListener('keyup',function(event){
    let usernames = $.querySelectorAll('.' + event.target.dataset.section +' .username')
    usernames.forEach(function(username){
        if(username.innerHTML.includes(event.target.value.trim())){
            username.parentNode.style.display = 'table-row'
        } else {
            username.parentNode.style.display = 'none'
        }
    })
})
})


storeEmailInput.addEventListener('keyup',checkEmail)
adminEmailInput.addEventListener('keyup',checkEmail)
