let slideWindow = document.getElementsByClassName('slideImages');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');
let slideNum = 0;
let slideImages = document.getElementsByClassName('imageSlide')
let scrollInterval = null;
const modal = document.querySelector('.foodModal');
const overlay = document.querySelector('.overlay');
const thumbNails = document.querySelectorAll('.foodImg');

overlay.addEventListener('click', closeModal);
document.querySelector('#closeModal').addEventListener('click', closeModal)

thumbNails.forEach(img => {
    img.addEventListener('click', openModal);
})

function openModal() {
    modal.classList.add('active');
    overlay.classList.add('active');
    document.querySelector('.fullImage').src = this.src;
}

function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

nextBtn.addEventListener('click', ()=> {
    if(slideNum < slideImages.length - 1) {
        slideNum++;
        smoothScroll();
    }
});

backBtn.addEventListener('click', ()=> {
    if(slideNum > 0) {
        slideNum--;
        smoothScroll();
    }
});

function smoothScroll() {
    slideWindow[0].scrollTo({
        left: slideImages[slideNum].offsetLeft, 
        top: slideImages[slideNum].offsetTop,
        behavior: "smooth",
    });
    autoScroll();
}

function autoScroll() {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        if(slideNum === 3) slideNum = 0;
        else slideNum++;
        smoothScroll();
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