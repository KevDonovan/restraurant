let slideWindow = document.getElementsByClassName('slideImages');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');
let slideNum = 0;
let slideImages = document.getElementsByClassName('imageSlide')

nextBtn.addEventListener('click', ()=> {
    if(slideNum < slideImages.length - 1) slideNum++;
    smoothScroll();
});

backBtn.addEventListener('click', ()=> {
    if(slideNum > 0) slideNum--;
    smoothScroll();
});

function smoothScroll() {
    slideWindow[0].scrollTo({
        left: slideImages[slideNum].offsetLeft, 
        top: slideImages[slideNum].offsetTop,
        behavior: "smooth",
    });
}

function autoScroll() {
    setTimeout(() => {
        if(slideNum === 3) slideNum = 0;
        else slideNum++;
        smoothScroll();
        autoScroll();
    }, 6000);
}

//ensures the slide stays in place when window resizes.
function scrollOnResize() {
    slideWindow[0].scrollTo({
        left: slideImages[slideNum].offsetLeft, 
        top: slideImages[slideNum].offsetTop,
        behavior: "instant",
    });
}

window.onresize = scrollOnResize;
autoScroll();