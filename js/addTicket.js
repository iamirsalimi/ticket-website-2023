let $ = document

let capacityInput = $.querySelector('.ticket-capacity')
let priceInput = $.querySelector('.ticket-price')
let addStoreBtn = $.querySelector('.addTicket-btn')

function validateInputs(event){
    let targetErr = event.target.parentNode.lastElementChild
    if(capacityInput.value === '' || priceInput.value === ''){
        targetErr.innerHTML = 'please Enter a valid number'
        targetErr.parentNode.classList.add('invalid')
        addStoreBtn.setAttribute('disabled', 'disabled')
        return true
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


priceInput.addEventListener('input',validateInputs)
capacityInput.addEventListener('input',validateInputs)