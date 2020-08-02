let sliders = document.getElementsByClassName('slider__item');
let numberSliderActive = 0;
let sliderArrowPrev = document.querySelector('.slider__arrow_prev');

let sliderDots = document.getElementsByClassName('slider__dot');
sliderDots.item(numberSliderActive).className = 'slider__dot slider__dot_active';


function printActiveSlider(numberSlider) {
  sliders.item(numberSlider).className = 'slider__item slider__item_active';
  sliderDots.item(numberSlider).className = 'slider__dot slider__dot_active';
}

function printSlider(numberSlider) {
  sliders.item(numberSlider).className = 'slider__item';
  sliderDots.item(numberSlider).className = 'slider__dot';
}


for (let i = 0; i < sliders.length; i++) {
  sliderDots.item(i).onclick = printSlidersShow;

  function printSlidersShow() {
    for (let a = 0; a < sliders.length; a++) {
      printSlider(a);
    }
    numberSliderActive = i;
    printActiveSlider(i);
  }
}

function printPrev() {
  
  if (numberSliderActive > 0) {
    printSlider(numberSliderActive);
    numberSliderActive -= 1;
    printActiveSlider(numberSliderActive);
  } else {
    numberSliderActive = 0;
    printSlider(numberSliderActive);
    numberSliderActive = sliders.length - 1;;
    printActiveSlider(numberSliderActive);
  }
}

sliderArrowPrev.onclick = printPrev;


let sliderArrowNext = document.querySelector('.slider__arrow_next');

function printNext() {
  
  if (numberSliderActive < sliders.length - 1) {
    printSlider(numberSliderActive);
    numberSliderActive += 1;
    printActiveSlider(numberSliderActive);
  } else {
    numberSliderActive = sliders.length - 1;
    printSlider(numberSliderActive);
    numberSliderActive = 0;
    printActiveSlider(numberSliderActive);
  }
}

sliderArrowNext.onclick = printNext;