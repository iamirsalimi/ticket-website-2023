let $ = document


// menu and section variables
let menuItems = $.querySelectorAll('.menuList li')
let sectionElems = $.querySelectorAll('.content section') 
let menuTitle = $.querySelector('.content-section-title')

// dashboard shortcuts 
let goToCustomers = $.querySelector('.all-users-title button span')
let goToTickets = $.querySelector('.recent-purchases-title button span')

let linkRegex = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/g
// section Sep variables
let sectionSeps = $.querySelectorAll('.menuItem-sectionSep .SectionSep')
let sectionSepContainer = $.querySelector('.menuItem-sectionSep')

let addSeps = $.querySelectorAll('.menuItem-sectionSep .addStore-tickets input')
let addForms = $.querySelectorAll('.add-content form')

let ticketSeps = $.querySelectorAll('.menuItem-sectionSep .tickets input') 
let ticketContents = $.querySelectorAll('.tickets-content .tickets-table')

// Inputs variables
let showPass =  $.querySelectorAll('.show-pass span')
let adminEmailInput = $.getElementById('admin-email')
let storeEmailInput = $.querySelector('.store-email')
let searchInputs = $.querySelectorAll('.serachbar input')
let searchBtn = $.querySelector('.serachbar span')

let userTargetMenu , userTargetSep , targetSepElem , usernames , passInput

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

// checking Email 
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
        let userTargetElem = $.querySelector('.add-content .'+ event.target.nextElementSibling.dataset.septarget)
        addForms.forEach(function(addForm){
            addForm.style.display = 'none'
        })
        userTargetElem.style.display = 'block'

        menuTitle.innerHTML = '<h2>Outinz '+ event.target.nextElementSibling.innerHTML +'<span>  Section</span></h2>'
        // get active class to menu separator target
        addSeps.forEach(function(addSepElem){
            addSepElem.nextElementSibling.classList.remove('active')
        })
        event.target.nextElementSibling.classList.add('active')
    })
})

ticketSeps.forEach(function(ticketSep){
    ticketSep.addEventListener('click',function(event){

        let userTargetElem = $.querySelector('.tickets-content .'+ event.target.nextElementSibling.dataset.septarget)
        ticketContents.forEach(function(ticketContent){
            ticketContent.style.display = 'none'
        })
        userTargetElem.style.display = 'block'
        
        menuTitle.innerHTML = '<h2>Outinz '+ event.target.nextElementSibling.innerHTML +'<span>  OverView</span></h2>'
        // get active class to menu separator target
        ticketSeps.forEach(function(ticketSepElem){
            ticketSepElem.nextElementSibling.classList.remove('active')
        })
        event.target.nextElementSibling.classList.add('active')
    })
})
// dashboard short cut
goToTickets.addEventListener('click',function(event){
    // hide setions
    
    sectionElems.forEach(function(section){
        section.style.display = 'none'
    })

    menuItems.forEach(function(item){
        item.classList.remove('active')
    })

    ticketContents.forEach(function(ticketContent){
        ticketContent.style.display = 'none'
    })

    // add active class to separator
    ticketSeps.forEach(function(ticketSepElem){
        if(ticketSepElem.id === 'recent-purcahased'){
            ticketSepElem.nextElementSibling.classList.add('active')
        } else {
            ticketSepElem.nextElementSibling.classList.remove('active')
        }
    })
    
    // add display block sections
    sectionSeps[0].parentNode.style.display = 'block'
    sectionSeps[0].removeAttribute('style')
    ticketContents[1].removeAttribute('style')
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
        // hide all Sections
        sectionElems.forEach(function(section){
            section.style.display = 'none'
        })
        
        menuItems.forEach(function(item){
            item.classList.remove('active')
        })
        // show target Section
        event.target.classList.add('active')
        userTargetMenu = $.querySelector('.'+ event.target.dataset.class)
        userTargetMenu.removeAttribute('style')
        
        userTargetSep = event.target.dataset.sep
        // checking menu section has separator   
        if(userTargetSep !== 'none' && userTargetSep !== null){
            
            targetSepElem = $.querySelector('.menuItem-sectionSep .'+userTargetSep)
            sectionSeps.forEach(function(sectionSep){
                sectionSep.style.display = 'none';
            })

            sectionSepContainer.style.display = 'block'
            targetSepElem.style.display = 'block'
            
            // get active class of section Seps
            if(targetSepElem.className.includes('tickets SectionSep')){
                ticketSeps.forEach(function(ticketSepElem){
                    ticketSepElem.nextElementSibling.classList.remove('active')
                })
            }
            if(targetSepElem.className.includes('addStore-tickets SectionSep')){
                console.log('addsep')
                addSeps.forEach(function(addSepElem){
                    addSepElem.nextElementSibling.classList.remove('active')
                })
            }

            // add active class to section separators
            targetSepElem.children[1].classList.add('active')
        } else {
            sectionSepContainer.style.display = 'none'
            sectionSepContainer.style.display = 'none'
        }

        // changing menu title accord menu target
        if(userTargetMenu.className === 'dashboard-content'){
            menuTitle.innerHTML = '<h2>Outinz users <span>overview</span></h2>'
        } else if(userTargetMenu.className === 'customers-content'){
            menuTitle.innerHTML = '<h2>Outinz Customers  <span>List</span></h2>'
        } else if(userTargetMenu.className === 'stores-content'){
            menuTitle.innerHTML = '<h2>Outinz Stores  <span>List</span></h2>'
        } else if(userTargetMenu.className === 'tickets-content'){
            menuTitle.innerHTML = '<h2>Outinz All Tickets <span>List</span></h2>'
        } else if(userTargetMenu.className === 'add-content'){
            menuTitle.innerHTML = '<h2>Outinz add Store <span> section</span></h2>'
        } else {
            menuTitle.innerHTML = '<h2>Outinz Admin Profile <span> section</span></h2>'
        }
    })
})


// search inputs
searchInputs.forEach(function(searchInput){
    searchInput.addEventListener('keyup',function(event){
    let usernames = $.querySelectorAll('.' + event.target.dataset.section +' .username')
    usernames.forEach(function(username){
        if(username.innerHTML.toLocaleLowerCase().includes(event.target.value.trim())){
            username.parentNode.style.display = 'table-row'
        } else {
            username.parentNode.style.display = 'none'
        }
    })
})
})


storeEmailInput.addEventListener('keyup',checkEmail)
adminEmailInput.addEventListener('keyup',checkEmail)
