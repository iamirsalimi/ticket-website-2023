let $ = document

let container = $.querySelector('.container')
let editForm = $.querySelector('.edit-ticket-form')
let addTicketToUserContainer = $.querySelector('.add-ticket-form')
let editBtn = $.querySelector('.ticketProfile .btns .edit-ticket')
let backBtns = $.querySelectorAll('.back-to-infos')
let addTicketToUserBtn = $.querySelector('.addTicket-btn')
let editTicketModal = $.querySelector('.modal-add-ticket-details') 
let closeEditModalBtn = $.getElementById('cancel-btn')
let signUpInputElems = $.querySelectorAll('.singup-inputs-container input')
let forms = $.querySelectorAll('form')
let formTitle = $.querySelector('.title h2')
let formDesc = $.querySelector('.title p')
let showPass =  $.querySelectorAll('.show-pass i')
let formTarget , passTarget

function clearSpace(event){
    event.target.value = event.target.value.trim()
}

signUpInputElems.forEach(function(signUpInputElem){
    signUpInputElem.addEventListener('keyup',clearSpace)
})

// show pass
showPass.forEach(function(showPassElem){
    showPassElem.parentNode.addEventListener('click',function(event){
        passTarget = $.querySelector('.'+event.target.dataset.passtarget)
        if(passTarget.type === 'password'){
            passTarget.type = 'text'
            showPassElem.className = 'fa-solid fa-eye-slash'
        } else {
            passTarget.type = 'password'
            showPassElem.className = 'fa-solid fa-eye'
        }
    })
})

editBtn.addEventListener('click',function(){
    container.style.display = 'none'
    addTicketToUserContainer.style.display = 'none'
    editForm.style.display = 'flex'
})

backBtns.forEach(function(backBtn){
    backBtn.addEventListener('click',function(){
        container.style.display = 'block'
        addTicketToUserContainer.style.display = 'none'
        editForm.style.display = 'none'
    })
})

addTicketToUserBtn.addEventListener('submit',function(event){
    event.preventDefault()
    console.log(editTicketModal);
    editTicketModal.classList.add('active')
})

closeEditModalBtn.addEventListener('click',function(){
    editTicketModal.classList.remove('active')
})
