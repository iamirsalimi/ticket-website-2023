let $ = document

let container = $.querySelector('.container')
let editForm = $.querySelector('.edit-ticket-form')
let editBtn = $.querySelector('.ticketProfile .btns .edit-ticket')
let backBtns = $.querySelectorAll('.back-to-infos')
let ticketInputElems = $.querySelectorAll('.inputs input')
let formTarget , passTarget
let capacityInput = $.querySelector('.ticket-capacity')
let priceInput = $.querySelector('.ticket-price')
let addStoreBtn = $.querySelector('.addTicket-btn')

function validateInputs(event){
    let targetErr = event.target.parentNode.lastElementChild
    if(isNaN(event.target.value) || event.target.value <= 0){
        if(event.target.value !== '-1'){
            targetErr.innerHTML = 'please Enter a valid number'
            targetErr.parentNode.classList.add('invalid')
            addStoreBtn.setAttribute('disabled', 'disabled')
            return true
        }
    }
    
    addStoreBtn.removeAttribute('disabled')
    targetErr.parentNode.classList.remove('invalid')
    targetErr.innerHTML = ''
    return true
}

window.addEventListener('DOMContentLoaded',function(){
    let inputs = $.querySelectorAll('.ticket-input')
    let desc = $.querySelector('.ticket-desc')

    desc.value = ''

    inputs.forEach(function(input){
        if(input.type === 'number'){
            input.value = '0'
        } else {
            input.value = ''
        }
    })
})



window.addEventListener('load',function(){
    ticketInputElems.forEach(function(ticketInputElem){
        ticketInputElem.value = ''
    })
})

priceInput.addEventListener('input',validateInputs)
capacityInput.addEventListener('input',validateInputs)
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