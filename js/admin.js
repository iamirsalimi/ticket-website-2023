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

let ticketSeps = $.querySelectorAll('.menuItem-sectionSep .tickets input') 
let ticketContents = $.querySelectorAll('.tickets-content .tickets-table')

// Inputs variables
let showPass =  $.querySelectorAll('.show-pass span')
let adminEmailInput = $.getElementById('admin-email')
let searchInput = $.querySelector('.serachbar input')
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
    let emailErr = event.target.parentNode.lastElementChild
    let submitBtn = event.target.parentNode.parentNode.parentNode.lastElementChild
    console.log(submitBtn)
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

// load 
window.addEventListener('DOMContentLoaded',clearInputsValueHandler)

// sections seps
ticketSeps.forEach(function(ticketSep){
    ticketSep.addEventListener('click',function(event){

        let userTargetElem = $.querySelector('.tickets-content .'+ event.target.nextElementSibling.dataset.septarget)
        ticketContents.forEach(function(ticketContent){
            ticketContent.style.display = 'none'
        })
        
        userTargetElem.style.display = 'block'

        if(userTargetElem.className.includes('tickets-table rectent-purchased-tickets')){
            searchInput.placeholder = 'buyer username'
        } else {
            searchInput.placeholder = 'username'
        }

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

    sectionSeps.forEach(function(sectionSep){
        sectionSep.style.display = 'none'
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
    sectionElems[3].firstElementChild.firstElementChild.placeholder = 'buyer username'
    menuItems[3].classList.add('active')
    menuTitle.innerHTML = '<h2>Outinz Recently Purchased Tickets <span>List</span></h2>'
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
            targetSepElem.style.display = 'flex'

            // get active class of section Seps
            if(targetSepElem.className.includes('tickets SectionSep')){
                ticketSeps.forEach(function(ticketSepElem){
                    ticketSepElem.nextElementSibling.classList.remove('active')
                })
                sectionElems[3].querySelectorAll('.tickets-table')
                .forEach(function(section){
                    if(section.className.includes('tickets-table all-tickets')){
                        section.removeAttribute('style')
                    } else {
                        section.style.display = 'none'
                    }
                })
            }

            // add active class to section separators
            targetSepElem.children[1].classList.add('active')
            searchInput.placeholder = 'username'
        } else {
            sectionSepContainer.style.display = 'none'
        }

        // changing menu title accord menu target
        if(userTargetMenu.className === 'dashboard-content'){
            searchInput.parentNode.style.display = 'none'
            menuTitle.innerHTML = '<h2>Outinz users <span>overview</span></h2>'
        } else if(userTargetMenu.className === 'customers-content'){
            searchInput.parentNode.style.display = 'block'
            menuTitle.innerHTML = '<h2>Outinz Customers  <span>List</span></h2>'
        } else if(userTargetMenu.className === 'stores-content'){
            searchInput.parentNode.style.display = 'block'
            menuTitle.innerHTML = '<h2>Outinz Stores  <span>List</span></h2>'
        } else if(userTargetMenu.className === 'tickets-content'){
            searchInput.parentNode.style.display = 'block'
            menuTitle.innerHTML = '<h2>Outinz All Tickets <span>List</span></h2>'
        }  else {
            searchInput.parentNode.style.display = 'none'
            menuTitle.innerHTML = '<h2>Outinz Admin Profile <span> section</span></h2>'
        }
    })
})


// search inputs

searchInput.addEventListener('keyup',function(event){
    let usernames = $.querySelectorAll('.container .content .username')
    usernames.forEach(function(username){
        if(username.innerHTML.toLocaleLowerCase().includes(event.target.value.trim())){
            username.parentNode.style.display = 'table-row'
        } else {
            username.parentNode.style.display = 'none'
        }
    })
})


adminEmailInput.addEventListener('keyup',checkEmail)
