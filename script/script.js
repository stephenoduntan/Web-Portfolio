const pageWrapper = document.querySelector('.page-wrapper');
const pageHeader = document.querySelector('.header');
const navLink = document.querySelectorAll('.nav-link a');
const conSect = document.querySelectorAll('.contents section');
const webdevBtn = document.querySelector('.web-dev');
const webdevWrap = document.querySelector('.webdev-wrapper');
const designBtn = document.querySelector('.design');
const designWrap = document.querySelector('.design-wrapper');
const workNavItem = document.querySelectorAll('.work-nav-link');
const workCatBlock = document.querySelectorAll('.works');

// function addPicture(fold1, fold2, cat, format, container){
//     for(i = 1; i < fold2.length; i++){
//         let image = document.createElement('img');
//         image.setAttribute('src', `./images/${fold1}/${fold2}/${cat}${i}.${format}`);
//         image.setAttribute('id', `pic${i}`);
    
//         if(i > 4){
//             return false;
//         }else{
//             container.appendChild(image);
//         }
//     }
// }  

//let pageTitle = document.createElement('span');

// document.addEventListener('DOMContentLoaded', function(){
//     pageTitle.textContent = "home";
//     pageTitle.setAttribute('class', 'bg');
//     pageWrapper.appendChild(pageTitle)
// })

document.addEventListener('scroll', function(){
    pageHeader.classList.add('fixed')
})

// for(i = 0; i < navLink.length; i++){
//     navLink[i].addEventListener('click', function(e){
//         pageTitle.textContent = e.target.innerText;
//     })
// }

// function disPage(mod){
//     mod.style.display = 'flex'
// }

//webdevBtn.addEventListener('click', function(){disPage(webdevWrap)});

// designBtn.addEventListener('click', function(){
//     disPage(designWrap);
//     removeId();
// })

function miniNav(nav, block){
    for(i = 0; i < nav.length; i++){
        nav[i].addEventListener('click', function(){
            let active = document.getElementsByClassName('active-link')
            active[0].className = active[0].className.replace('active-link', '_')
            this.className += ' active-link';
    
            for(j = 0; j < block.length; j++){      
                if (this.innerHTML === block[j].id){
                    block[j].style.display = 'block';
                } else{
                    block[j].style.display = 'none';
                }
            }
        })
    }
}

miniNav(workNavItem, workCatBlock);

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