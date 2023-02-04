let $ = document

let container = $.querySelector('.container')
let editForm = $.querySelector('.edit-ticket-form')
let editBtn = $.querySelector('.ticketProfile .btns .edit-ticket')
let backBtns = $.querySelectorAll('.back-to-infos')
let formTarget , passTarget

editBtn.addEventListener('click',function(){
    container.style.display = 'none'
    editForm.style.display = 'flex'
})

backBtns.forEach(function(backBtn){
    backBtn.addEventListener('click',function(){
        container.style.display = 'block'
        editForm.style.display = 'none'
    })
})