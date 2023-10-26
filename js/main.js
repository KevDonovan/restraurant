let slideshow = document.getElementsByClassName('slideImages');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', ()=> {
    slideshow[0].scrollRight += 100;
});