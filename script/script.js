const pageWrapper = document.querySelector('.page-wrapper');
const pageHeader = document.querySelector('.header');
const navLink = document.querySelectorAll('.nav-link a');
const conSect = document.querySelectorAll('.contents section');
const workNavItem = document.querySelectorAll('.work-nav-link');
const workCatBlock = document.querySelectorAll('.works');
const workImage = document.querySelectorAll('.work-image');
const imgGroup = document.querySelectorAll('.work-image .img-group')

//Page header
document.addEventListener('scroll', function(){
    pageHeader.classList.add('fixed')
})

//Function to seperate categories
function miniNav(nav, changecat, block){
    for(i = 0; i < nav.length; i++){
        nav[i].addEventListener('click', function(){
            let active = document.getElementsByClassName('active-link')
            active[0].className = active[0].className.replace('active-link', '_')
            this.className += ' active-link';
            
            //work experience category
            for(j = 0; j < block.length; j++){      
                if (this.innerHTML === block[j].id){
                    block[j].style.display = 'block';
                } else{
                    block[j].style.display = 'none';
                }
            }
            //work type category
            for(k = 0; k < changecat.length; k++){
                if(this.innerHTML === changecat[k].classList[1]){
                    changecat[k].style.display = 'block';
                } else if(this.innerHTML === 'all'){
                    changecat[k].style.display = 'block';
                } else{
                    changecat[k].style.display = 'none';
                }
            }
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

let successPop = document.querySelector('.success');
let errorPop = document.querySelector('.error');

function popup(status){
    status.style.display = "flex";
    setTimeout(() => {
        status.style.display = "none";
    }, 3000);
}

window.addEventListener("load", function(){
    function sendData(){
        const XHR = new XMLHttpRequest();

        const FD = new FormData(contactForm);

        XHR.addEventListener("load", function(){
            popup(successPop)
        });

        XHR.addEventListener("error", function(){
            popup(errorPop)
        });

        XHR.open("POST", "mailto:stephenoduntan28@gmail.com");

        XHR.send(FD);
    }

    const contactForm = document.querySelector(".contact-form");

    contactForm.addEventListener("submit", function(event){
        event.preventDefault();

        sendData();
    })
})