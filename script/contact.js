const contactBtn = document.querySelector('#contact-btn');

//contact error/success message
let successPop = document.querySelector('.success');
let errorPop = document.querySelector('.error');

function popup(status){
    status.style.display = "flex";
    setTimeout(() => {
        status.style.display = "none";
    }, 3000);
}

//Email
let emailSubject = document.querySelector('#subject');
let emailBody = document.querySelector('#message');
let emailPhone = document.querySelector('#phone');

contactBtn.addEventListener("click", function(){
    if(!window.navigator.onLine){
       popup(errorPop);
    }else{
        window.open(`mailto:stephenoduntan28@gmail.com?subject=${emailSubject.value}&body=${emailBody.value}. You can reach me on ${emailPhone.value} to discuss more`);
    }
})