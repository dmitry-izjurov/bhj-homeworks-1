let sliders = document.getElementsByClassName('slider__item');
let numberSliderActive = 0;
let sliderArrowPrev = document.querySelector('.slider__arrow_prev');

let sliderDots = document.getElementsByClassName('slider__dot');
sliderDots.item(numberSliderActive).className = 'slider__dot slider__dot_active';

for (let i = 0; i < sliders.length; i++) {
  sliderDots.item(i).onclick = printSlidersShow;

  function printSlidersShow() {
    for (let a = 0; a < sliders.length; a++) {
      sliders.item(a).className = 'slider__item';
      sliderDots.item(a).className = 'slider__dot';
    }
    sliders.item(i).className = 'slider__item slider__item_active';
    sliderDots.item(i).className = 'slider__dot slider__dot_active';
    numberSliderActive = i;
  }
}

function printPrev() {
  
  if (numberSliderActive > 0) {
    sliders.item(numberSliderActive).className = 'slider__item';
    sliderDots.item(numberSliderActive).className = 'slider__dot';
    sliders.item(numberSliderActive - 1).className = 'slider__item slider__item_active';
    sliderDots.item(numberSliderActive - 1).className = 'slider__dot slider__dot_active';
    numberSliderActive -= 1;
    
  } else {
      numberSliderActive = sliders.length - 1;
      sliders.item(0).className = 'slider__item';
      sliderDots.item(0).className = 'slider__dot';
      sliders.item(sliders.length - 1).className = 'slider__item slider__item_active';
      sliderDots.item(sliders.length - 1).className = 'slider__dot slider__dot_active';
    }
}

sliderArrowPrev.onclick = printPrev;

let sliderArrowNext = document.querySelector('.slider__arrow_next');

function printNext() {
  
  if (numberSliderActive < sliders.length - 1) {
    sliders.item(numberSliderActive).className = 'slider__item';
    sliderDots.item(numberSliderActive).className = 'slider__dot';
    sliders.item(numberSliderActive + 1).className = 'slider__item slider__item_active';
    sliderDots.item(numberSliderActive + 1).className = 'slider__dot slider__dot_active';
    numberSliderActive += 1;
  
  } else {
    numberSliderActive = 0;
    sliders.item(sliders.length - 1).className = 'slider__item';
    sliderDots.item(sliders.length - 1).className = 'slider__dot';
    sliders.item(numberSliderActive).className = 'slider__item slider__item_active';
    sliderDots.item(numberSliderActive).className = 'slider__dot slider__dot_active';
  }
}

sliderArrowNext.onclick = printNext;