let $ = document

let container = $.querySelector('.container')
let editForm = $.querySelector('.edit-user-form')
let addTicketToUserContainer = $.querySelector('.add-ticket-form')
let editUserBtn = $.querySelector('.userProfile .btns .edit-user')
let editTicketBtn = $.querySelector('.addTicket-to-user-btn')
let backBtns = $.querySelectorAll('.back-to-infos')
let signUpInputElems = $.querySelectorAll('.singup-inputs-container input')
let addTicketToUserBtn = $.querySelector('.addTicket-btn')
let editTicketModal = $.querySelector('.modal-add-ticket-details') 
let closeEditModalBtn = $.getElementById('cancel-btn')
let forms = $.querySelectorAll('form')
let ticketInput = $.querySelector('.add-content form .ticket-input')
let emailInput = $.querySelector('.email-input')
let deleteUserBtn = $.querySelector('.content .delete-user')
let deleteUserModal = $.querySelector('.delete-modal')
let deleteUserCancelBtn = $.querySelector('.delete-modal .cancel-btn')
let formTarget , passTarget

function clearSpace(event){
    event.target.value = event.target.value.trim()
}

signUpInputElems.forEach(function(signUpInputElem){
    signUpInputElem.addEventListener('keyup',clearSpace)
})

emailInput.addEventListener('blur',function(event){
    let emailValue = event.target.value
    let linkRegex = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{3})+$/g
    if(linkRegex.test(emailValue) || emailValue.trim() === ''){
        event.target.parentNode.classList.remove('invalid')
    } else {
        event.target.parentNode.classList.add('invalid')
    }
})

editUserBtn.addEventListener('click',function(){
    container.style.display = 'none'
    addTicketToUserContainer.style.display = 'none'
    editForm.style.display = 'flex'
})

editTicketBtn.addEventListener('click',function(){
    container.style.display = 'none'
    addTicketToUserContainer.style.display = 'flex'
    editForm.style.display = 'none'
})

backBtns.forEach(function(backBtn){
    backBtn.addEventListener('click',function(){
        container.style.display = 'block'
        addTicketToUserContainer.style.display = 'none'
        editForm.style.display = 'none'
    })
})

addTicketToUserBtn.addEventListener('click',function(event){
    event.preventDefault()
    if(ticketInput.value.trim()){
        editTicketModal.classList.add('active')
    }
})

closeEditModalBtn.addEventListener('click',function(){
    editTicketModal.classList.remove('active')
})

// show and hide logout modal
deleteUserBtn.addEventListener('click',function(){
    deleteUserModal.classList.add('active')
})

deleteUserCancelBtn.addEventListener('click',function(){
    deleteUserModal.classList.remove('active')
})
