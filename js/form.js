let $ = document

let signUpInputElems = $.querySelectorAll('.singup-inputs-container input')
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


function clearSpace(event){
    if(event.target.value.trim() === ''){
        event.target.value = ''
    }

}

signUpInputElems.forEach(function(signUpInputElem){
    signUpInputElem.addEventListener('keyup',clearSpace)
})



signUpInputElems[4].addEventListener('blur',function(event){
    if(event.target.value !== signUpInputElems[3].value){
        signUpInputElems[4].classList.add('invalid')
        event.target.parentNode.lastElementChild.classList.add('show-err')
    } else {

        signUpInputElems[4].classList.remove('invalid')
        event.target.parentNode.lastElementChild.classList.remove('show-err')
    }
})

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
