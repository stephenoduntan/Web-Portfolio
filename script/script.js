const pageWrapper = document.querySelector('.page-wrapper');
const pageHeader = document.querySelector('.header');
const navLink = document.querySelectorAll('.nav-link a');
const conSect = document.querySelectorAll('.contents section');
const workNavItem = document.querySelectorAll('.work-nav-link');
const workImage = document.querySelectorAll('.work-image');
const progressBarContainer = document.querySelector("#progressBarContainer");
const progressBar = document.querySelector("#progressBar");
let totalPageHeight = document.body.scrollHeight - window.innerHeight;
let debounceResize;


//Page header
document.addEventListener('scroll', function(){
    pageHeader.classList.add('fixed')
})

//Function to seperate categories
function miniNav(nav, changecat){
    for(i = 0; i < nav.length; i++){
        nav[i].addEventListener('click', function(event){
            let active = document.getElementsByClassName('active-link')
            active[0].className = active[0].className.replace('active-link', '_')
            this.className += ' active-link';

            for (j = 0; j < changecat.length; j++) {
                let e = changecat[j];

                if (e.classList.contains(this.textContent)) {
                    e.style.display = 'block';
                }else if(this.textContent == 'all'){
                    e.style.display = 'block';
                }else{
                    e.style.display = 'none';
                }
                
            }
            
            event.preventDefault();
                
        })    
        
    }
}


//Work category on about page
miniNav(workNavItem, workImage);

//menu button on small device view
let menuBtn = document.querySelector('button.menu-btn');
let miniMenu = document.querySelector('.nav-link-mini .nav-items .nav-link');
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

window.addEventListener("scroll", () => {
    let newProgressHeight = window.pageYOffset / totalPageHeight;
    progressBar.style.transform = `scale(1,${newProgressHeight})`;
    progressBar.style.opacity = `${newProgressHeight}`;
  }, {
    capture: true,
    passive: true
});

progressBarContainer.addEventListener("click", (e) => {
    let newPageScroll = e.clientY / progressBarContainer.offsetHeight * totalPageHeight;
    window.scrollTo({
        top: newPageScroll,
        behavior: 'smooth'
    });
});

window.addEventListener("resize", () => {
    clearTimeout(debounceResize);
    debounceResize = setTimeout(() => {
      totalPageHeight = document.body.scrollHeight - window.innerHeight;
    }, 250);
});