let $ = document

let backBtn = $.querySelector('.back-history')

backBtn.addEventListener('click',function(){
    history.back()
})