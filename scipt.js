let img = document.querySelectorAll('.main .mains img');
let num = 0; // 이미지 번호


setInterval(function(){
    for(let i = 0; i < img.length; i++) {
    img[i].classList.remove('show'); 
    }
    
    num = num + 1;
    if(num > 2) { num = 0; }   
    img[num].classList.add('show');
    console.log(num)
    }, 4000);