const skillName = document.querySelector('.skill');

{
    let skillArr = ['<Frontend Developer/>', 'UI/UX designer', 'Creative Designer']
    let textIndex = 0;
    let charIndex = 0;

    function type(){
        // to start typing
        if(charIndex < skillArr[textIndex].length){
            skillName.textContent += skillArr[textIndex].charAt(charIndex);
            charIndex++;

            setTimeout('type()', 300)
        }else{
            //pause when done with first word
            setTimeout('erase()', 3000)
        }
    }

    function erase(){
        //to start deleting word
        if(charIndex > 0){
            skillName.textContent = skillArr[textIndex].substring(0, charIndex - 1);
            charIndex--;

            setTimeout('erase()', 150)
        }else{
            //type next word
            textIndex++;
            if(textIndex >= skillArr.length){
                textIndex = 0
            }
            
            setTimeout('type()', 300)
        }
    }

    document.addEventListener('DOMContentLoaded', function(){
        setTimeout('type()', 3000)
    })
}