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

function addPicture(fold1, fold2, cat, format, container){
    for(i = 1; i < fold2.length; i++){
        let image = document.createElement('img');
        image.setAttribute('src', `./images/${fold1}/${fold2}/${cat}${i}.${format}`);
        image.setAttribute('id', `pic${i}`);
    
        if(i > 4){
            return false;
        }else{
            container.appendChild(image);
        }
    }
}  

let pageTitle = document.createElement('span');

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

for(i = 0; i < workNavItem.length; i++){
    let workItem = workNavItem[i];

    workItem.addEventListener('click', function(){
        workItem.classList.add('active-link');

        if(workItem.classList.contains('active-link')){
            workItem.classList.remove('active-link')
        };
    })
}