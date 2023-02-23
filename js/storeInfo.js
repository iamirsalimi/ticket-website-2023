let $ = document

let container = $.querySelector('.container')
let editForm = $.querySelector('.edit-store-form')
let editBtn = $.querySelector('.storeProfile .btns .edit-store')
let backBtn = $.querySelector('.back-to-infos')
let signUpInputElems = $.querySelectorAll('.singup-inputs-container input')
let forms = $.querySelectorAll('form')
let formTitle = $.querySelector('.title h2')
let formDesc = $.querySelector('.title p')
let deleteStoreBtn = $.querySelector('.content .delete-store')
let deleteStoreModal = $.querySelector('.delete-modal')
let deleteStoreCancelBtn = $.querySelector('.delete-modal .cancel-btn')
let formTarget , passTarget

window.addEventListener('load',function(){
    signUpInputElems.forEach(function(signUpInputElem){
        signUpInputElem.value = ''
    })
})

function clearSpace(event){
    event.target.value = event.target.value.trim()
}

signUpInputElems.forEach(function(signUpInputElem){
    signUpInputElem.addEventListener('keyup',clearSpace)
})

signUpInputElems[signUpInputElems.length-1].addEventListener('blur',function(event){
    let emailValue = event.target.value
    let linkRegex = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{3})+$/g
    if(linkRegex.test(emailValue) || emailValue.trim() === ''){
        event.target.classList.remove('invalid')
        event.target.parentNode.lastElementChild.classList.remove('show-err')
    } else {
        event.target.classList.add('invalid')
        event.target.parentNode.lastElementChild.classList.add('show-err')
    }
})

editBtn.addEventListener('click',function(){
    container.style.display = 'none'
    editForm.style.display = 'block'
})

backBtn.addEventListener('click',function(){
    container.style.display = 'block'
    editForm.style.display = 'none'
})

// show and hide logout modal
deleteStoreBtn.addEventListener('click',function(){
    deleteStoreModal.classList.add('active')
})

deleteStoreCancelBtn.addEventListener('click',function(){
    deleteStoreModal.classList.remove('active')
})

