let slideWindow = document.getElementsByClassName('slideImages');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');
let slideNum = 0;
let slideImages = document.getElementsByClassName('imageSlide')

nextBtn.addEventListener('click', ()=> {
    if(slideNum < 3) slideNum++;
    let viewWidth = document.getElementById('imageSlide').offsetWidth;
    slideWindow[0].style.scrollBehavior = "smooth";
    slideWindow[0].scrollLeft += viewWidth;
});

backBtn.addEventListener('click', ()=> {
    if(slideNum > 0) slideNum--;
    let viewWidth = document.getElementById('imageSlide').offsetWidth;
    slideWindow[0].style.scrollBehavior = "smooth";
    slideWindow[0].scrollLeft -= viewWidth;
});

function scrollToImg() {
    slideWindow[0].scrollTo(slideImages[slideNum].offsetLeft, slideImages[slideNum].offsetTop);
}

window.onresize = scrollToImg;