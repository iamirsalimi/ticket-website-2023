let $ = document

// get Dom Elements and initial variables
let navbar = $.querySelector('nav')
let hamburger = $.querySelector('.hamburger-menu')
let menu = $.querySelector('.menu')
let logo = $.querySelector('.left-nav .nav-title')
let headerSectionImg = $.querySelector('.header-bg')
let goToUpBtn = $.querySelector('.goToUp-btn')
let eventNumbers = $.querySelectorAll('.number')
let maxNumber1 , maxNumber2 , maxNumber3 , currentNumber1 , currentNumber2 , currentNumber3 ,isCounterSet = false 
let cards = $.querySelector('.cards')
let sliderPrevBtn = $.querySelector('.prev')
let sliderNextBtn = $.querySelector('.next')
let slideCount = 0
let card = $.querySelectorAll('.card')
let remainCards = card.length
let currentLoc , showCards , nextSlideWidth 

let menuItems = $.querySelectorAll('.menu .menu-item')

// changing navbar style onscroll and load
window.onload = function(){
    if(document.documentElement.scrollTop > 0){
        navbar.classList.add('scrolling')
        navbar.style.padding = '5px 40px'
    } else {
        navbar.classList.remove('scrolling')
        navbar.style.padding = '10px 40px'
    }
    if(document.documentElement.scrollTop > 150){
        goToUpBtn.classList.add('show-btn')
    } else {
        goToUpBtn.classList.remove('show-btn')
    }
    if(document.documentElement.scrollTop > 530 && !isCounterSet){
        count()
    }

    if(slideCount === 0){
        sliderPrevBtn.disabled = true
    } else if(cards.style.transform === 'translateX(1880px)'){
        sliderNextBtn.disabled = true
    }
    
    if(remainCards <= 3){
        sliderPrevBtn.disabled = true
        sliderNextBtn.disabled = true
        currentLoc = 0
    } else if(remainCards >= 4){
        if(screen.width < 720){
            showCards = 1
            currentLoc = 630
            nextSlideWidth = 420
        } else if(screen.width < 900){
            showCards = 2
            currentLoc = 350
            nextSlideWidth = 350
        } else if(screen.width < 1110){
            showCards = 2
            currentLoc = 470
            nextSlideWidth = 470
        } else if(screen.width< 1350){
            showCards = 3
            currentLoc = 175
            nextSlideWidth = 300
        } else {
            showCards = 3
            currentLoc = 235
            nextSlideWidth = 470
        }
    }
    
    
    
    cards.style.transform = `translateX(${currentLoc}px)`
}

window.onscroll = function() {
    if(document.documentElement.scrollTop > 0){
        navbar.classList.add('scrolling')
        navbar.style.padding = '5px 40px'
    } else {
        navbar.classList.remove('scrolling')
        navbar.style.padding = '10px 40px'
    }

    if(document.documentElement.scrollTop > 150){
        goToUpBtn.classList.add('show-btn')
    } else {
        goToUpBtn.classList.remove('show-btn')
    }

    if(document.documentElement.scrollTop > 530 && !isCounterSet){
        count()
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

    let typeSpeed = 100
    
    if(!this.isDeleting && this.text === fullTxt){
        typeSpeed = this.wait
        this.isDeleting = true
    } else if(this.isDeleting && this.text === ''){
        this.isDeleting = false
        this.wordIndex++
        typeSpeed = 200
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
            logo.style.color = '#380091'
        } , 150)
    } else {
        logo.style.color = '#fff'
    }
    
}

function hideMenu(event){
    if(event.target.nodeName == "DIV"){
        logo.style.color = '#fff'
        hamburger.classList.remove('open')
        menu.classList.remove('open')
        headerSectionImg.style.filter = 'brightness(40%)'; 
    }
}

// counter up


function count(){
    isCounterSet = true
    eventNumbers.forEach(function(eventNumber){
        eventNumber.innerHTML = 0
        const updateCounter = () =>{
            const target = +eventNumber.getAttribute('data-number')
            const c = +eventNumber.innerText
            const increment = target / 200
            if(c < target){
                eventNumber.innerText = `${Math.ceil(c + increment)}`
                setTimeout(updateCounter,1)
            } else {
                eventNumber.innerText = target
    
            }
        }
        updateCounter();
    })
}

// go to up btn 
function goToUpHandler(){
    scrollTo(0,0)
}

// slider

function nextCardHandler(){
    slideCount++
    sliderNextBtn.style.right = '0'

    if(sliderPrevBtn.disabled){
        sliderPrevBtn.disabled = false
    }

    cards.style.transform = `translateX(${ currentLoc - (slideCount * nextSlideWidth)}px)`
    
    if(slideCount === remainCards - showCards){
        sliderNextBtn.disabled = true
    }
}

function prevCardHandler(){
    slideCount--
    
    if(sliderNextBtn.disabled){
        sliderNextBtn.disabled = false
    }
    
    cards.style.transform = `translateX(${ currentLoc - (slideCount * nextSlideWidth)}px)`

    if(slideCount === 0){
        sliderPrevBtn.disabled = true
    }
}

// events
sliderNextBtn.addEventListener('click',nextCardHandler)
sliderPrevBtn.addEventListener('click',prevCardHandler)
goToUpBtn.onclick = goToUpHandler
window.addEventListener('DOMContentLoaded', init)
hamburger.addEventListener('click',showMenu)
document.body.addEventListener('click',hideMenu)
menuItems.forEach(function(menuItem){
    menuItem.addEventListener('click',function(){
        hamburger.classList.remove('open')
        menu.classList.remove('open')
        
        if(hamburger.className.includes('open')){
            setTimeout(function(){
                logo.style.color = '#380091'
            } , 150)
            headerSectionImg.style.filter = 'brightness(10%)'; 
        } else {
            logo.style.color = '#fff'
            headerSectionImg.style.filter = 'brightness(40%)'; 
        }
    })
})