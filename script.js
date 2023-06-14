const prev = document.querySelector('.div-right')
const next = document.querySelector('.div-left')
const img = document.querySelector('.slider')
const pauseBtn = document.querySelector('#slider-pause');
const resumeBtn = document.querySelector('#slider-resume');

let index = 0;



function prevHandler() {
    index--
    if(index < 1){
        index = 5
    }
    img.src = './images/' + index + '.jpg'
    console.log('prev');
}

function nextHandler() {
    index++;
    if(index > 5) {
        index = 1
    }
    img.src = `./images/${index}.jpg`
    console.log('next');
}

let intervalId = setInterval(nextHandler, 3000); 

function pauseSlider() {
  clearInterval(intervalId);   
}

function resumeSlider() {
  intervalId = setInterval(nextHandler, 3000);
}

prev.addEventListener ('click' , prevHandler)
next.addEventListener ('click' , nextHandler)
pauseBtn.addEventListener('click', pauseSlider)
resumeBtn.addEventListener('click', resumeSlider)

