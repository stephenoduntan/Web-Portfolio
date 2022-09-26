const designWork = document.querySelectorAll(".design img");
const designImage = document.querySelectorAll(".design");
const popupModal = document.querySelector(".view-modal");
const popupImg = document.querySelector(".view-modal img");
const extFrame = document.querySelector(".view-modal iframe");
const close = document.querySelector(".close-btn");

(() => {
    for (s = 0; s < workImage.length; s++){
        let img = workImage[s];

        img.addEventListener('click', function(){
            if(img.classList.contains('design')){
                let _this = img.children[1].childNodes[1];

                extFrame.style.display = 'none';
                popupImg.style.display = 'block';
                popupImg.src = _this.src;
                popupModal.style.display = 'flex';
                
                console.log(_this.src)
            }else{
                popupImg.style.display = 'none';
                extFrame.style.display = 'block';
                extFrame.src = img.title;
                popupModal.style.display = 'flex';
                console.log(img.title);
            }
            console.log('clicked')
        })
        
    }

    close.addEventListener('click', function(){
        popupModal.style.display = 'none'
    })
})();



console.log(designWork, popupImg, workImage)