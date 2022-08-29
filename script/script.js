const pageWrapper = document.querySelector('.page-wrapper');
const pageHeader = document.querySelector('.header');
const navLink = document.querySelectorAll('.nav-link a');
const conSect = document.querySelectorAll('.contents section');
const workNavItem = document.querySelectorAll('.work-nav-link');
const workCatBlock = document.querySelectorAll('.works');
const workImage = document.querySelectorAll('.work-image');
const imgGroup = document.querySelectorAll('.work-image .img-group');


//Page header
document.addEventListener('scroll', function(){
    pageHeader.classList.add('fixed')
})

//Function to seperate categories
function miniNav(nav, changecat, block){
    for(i = 0; i < nav.length; i++){
        nav[i].addEventListener('click', function(event){
            let active = document.getElementsByClassName('active-link')
            active[0].className = active[0].className.replace('active-link', '_')
            this.className += ' active-link';
            event.preventDefault()
        })
        
    }
}

//Work category on about page
miniNav(workNavItem, workImage, workCatBlock);

//menu button on small device view
let menuBtn = document.querySelector('button.menu-btn');
let miniMenu = document.querySelector('.nav-link-mini');
let menuOpen = false;

menuBtn.addEventListener('click', function(){
    if(!menuOpen){
        menuBtn.classList.add('open');
        miniMenu.classList.add('mini-nav-active');
        menuOpen = true;
    } else{
        menuBtn.classList.remove('open');
        miniMenu.classList.remove('mini-nav-active');
        menuOpen = false;
    }
})