const thumbBar = document.querySelector('.thumb-bar');
const fullImg = document.querySelector('.full-img');
const contactBlock = document.querySelector('.contact-wrapper');
const closeBtn = document.querySelectorAll('.x');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');

addPicture('display', 'designs', 'des', 'png', thumbBar);

for(l = 0; l < closeBtn.length; l++){
    let x = closeBtn[l]
    x.addEventListener('click', function(){
        x.parentElement.parentElement.style.display = 'none';
        document.body.style.position = 'initial';
    })       
}

function removeId(){
    let thumbPic = document.querySelectorAll('.thumb-bar img');
    for(i = 0; i < thumbPic.length; i++){
        thumbPic[i].removeAttribute('id')
    }
}

const thumbBarImg = document.querySelectorAll('.thumb-bar img');

for (i = 0; i < thumbBarImg.length; i++){
    let e = thumbBarImg[i];
    e.addEventListener('click', function(){
        fullImg.src = e.src;
    })
}

let index = 1;

nextBtn.addEventListener('click', function(){
    index++;

    if(index > thumbBarImg.length){
        index = thumbBarImg.length;
        return false;
    }

    fullImg.src =  `./images/display/designs/des${index}.png`;
})
previousBtn.addEventListener('click', function(){
    index--;

    if(index == 0){
        index = 1;
        return false;
    }

    fullImg.src =  `./images/display/designs/des${index}.png`;
})