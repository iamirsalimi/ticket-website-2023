let $ = document

let backBtn = $.querySelector('.back-history')
const selected = $.querySelector('.selected')
const optionsContainer = $.querySelector('.options-container')
const optionsList = $.querySelectorAll('.option')

selected.addEventListener('click',function(){
    optionsContainer.classList.toggle('active')
})

optionsList.forEach(function(option){
    option.addEventListener('click',function(event){
        selected.querySelector('.selected-title').innerHTML = option.querySelector('label').innerHTML
        optionsContainer.classList.remove('active')
    })
})



backBtn.addEventListener('click',function(){
    history.back()
})