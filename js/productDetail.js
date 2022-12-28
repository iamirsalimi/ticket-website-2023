let $ = document

let backBtn = $.querySelector('.backBtn')

backBtn.addEventListener('click',function(){
    history.back()
})