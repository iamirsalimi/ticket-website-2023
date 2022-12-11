let $ = document

// get Dom Elements and initial variables
let navbar = $.querySelector('nav')
let hamburger = $.querySelector('.hamburger-menu')
let menu = $.querySelector('.menu')
let logo = $.querySelector('.left-nav .nav-title')


// changing navbar style onscroll 
window.onscroll = function() {
    if(document.documentElement.scrollTop > 0){
        navbar.classList.add('scrolling')
        navbar.style.padding = '5px 40px'
    } else {
        navbar.classList.remove('scrolling')
        navbar.style.padding = '10px 40px'
    }
}

// type effect

const TypeWriter = function (textElement , words , wait = 1500 ){
    this.textElement = textElement
    this.words = words
    this.text = ''
    this.wordIndex = 0
    this.wait = +wait
    this.type()
    this.isDeleting = false
}

TypeWriter.prototype.type = function(){
    const current = this.wordIndex %  this.words.length

    const fullTxt = this.words[current]

    if(this.isDeleting){
        this.text = fullTxt.substring(0,this.text.length-1)
    } else {
        this.text = fullTxt.substring(0,this.text.length+1)
    }

    this.textElement.innerHTML = `<span class="text">${this.text}</span>`

    let typeSpeed = 150
    
    if(!this.isDeleting && this.text === fullTxt){
        typeSpeed = this.wait
        this.isDeleting = true
    } else if(this.isDeleting && this.text === ''){
        this.isDeleting = false
        this.wordIndex++
        typeSpeed = 300
    } 

    setTimeout(() => this.type() , typeSpeed)
}

function init(){
    const textElement = $.querySelector('.type span')
    const words = JSON.parse(textElement.getAttribute('data-words'))

    const wait = textElement.getAttribute('data-wait')

    new TypeWriter(textElement, words , wait)
}



// show and hide menu
function showMenu(){
    hamburger.classList.toggle('open')
    menu.classList.toggle('open')
    
    if(hamburger.className.includes('open')){
        setTimeout(function(){
            logo.style.color = '#632eba'
        } , 150)
    } else {
        logo.style.color = '#fff'
    }
    
}

window.addEventListener('DOMContentLoaded', init)
hamburger.addEventListener('touch',showMenu)
hamburger.addEventListener('click',showMenu)