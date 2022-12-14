let $ = document

let inputElems = $.querySelectorAll('.input-container .input')
let sectionsSep = $.querySelectorAll('.section-separator h3')
let formTarget
let forms = $.querySelectorAll('form')

// load
window.onload = function(){
    let localForm = localStorage.getItem('activeForm')
    console.log(localForm)

    if(localForm === null){
        localStorage.setItem('activeForm', forms[1].className)
        
    }

    forms.forEach(function(form){
        if(form.className === localForm){
            form.style.display = 'flex'
        }
        else{
            form.style.display = 'none'
        }
    })
    
    // adding class to target
    sectionsSep.forEach(function(section){
        if(section.dataset.form === localForm){
            section.classList.add('active')

        } else {
            section.classList.remove('active')
        }
    })
}


// form Input
sectionsSep.forEach(function(sectionSep){
    sectionSep.addEventListener('click', function(event){
        sectionsSep.forEach(function(section){
                section.classList.remove('active')
        })
        // adding class to target
        event.target.classList.add('active')
        formTarget = event.target.getAttribute('data-form')

        localStorage.setItem('activeForm', formTarget)

        forms.forEach(function(form){
            if(form.className === formTarget){
                form.style.display = 'flex'
            }
            else{
                form.style.display = 'none'
            }
        })
    })
})
