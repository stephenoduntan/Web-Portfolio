const nameInst = document.querySelector('.name');
const pageHeader = document.querySelector('.header');
const  logoAnim = document.querySelector('.mini-logo');
const navLink = document.querySelectorAll('.nav-link a');
const bgText = document.querySelector('span.bg');
const conSect = document.querySelectorAll('.contents section');
const contactBtn = document.querySelector('.contact-button');
const friends = document.querySelector('.friends-block');
const webdevBtn = document.querySelector('.web-dev');
const webdevWrap = document.querySelector('.webdev-wrapper');
const designBtn = document.querySelector('.design');
const designWrap = document.querySelector('.design-wrapper');

let name = '<Olawole Oduntan/>';
let split = name.split('');
let display;

function disName(){ 
    if(split.length > 0){
        nameInst.textContent += split.shift()
    }else{
        clearTimeout(display);
        return false;
    }
    display = setTimeout('disName()', 300)
}

let deg = 1;
function rotateY(){
    logoAnim.style.transform = `rotateY(${deg}deg)`;
    if(deg != 150){
        deg++;
    }else{
        deg-=150
    }
}

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

document.onload = 
    disName(); 
    setInterval(rotateY, 100);
    addPicture('pictures', 'friends', 'friend','png', friends); 

document.addEventListener('scroll', function(){
    pageHeader.classList.add('fixed')
})

for(i = 0; i < navLink.length; i++){
    navLink[i].addEventListener('click', function(e){
        bgText.textContent = e.target.innerText;
    })
}

for(k = 0; k < conSect.length; k++){
    let e = conSect[k]
    e.addEventListener('mouseenter', function(){
        bgText.textContent = e.id
    })
}

contactBtn.addEventListener('click', function(){
    contactBlock.style.display = 'block';
    document.body.style.position = 'fixed';
})

function disPage(mod){
    mod.style.display = 'flex'
}

webdevBtn.addEventListener('click', function(){disPage(webdevWrap)});

designBtn.addEventListener('click', function(){
    disPage(designWrap);
    removeId();
})