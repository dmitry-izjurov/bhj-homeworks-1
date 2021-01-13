"use strict";
const elementHasTooltipArr = Array.from(document.querySelectorAll('.has-tooltip')); // ссылка с поздсказкой
let numberElement;                                                                  // Номера предыдущего активного элемента
let printToolTip = function(text) {
  let elemToolTipItem = 
  `<div class="tooltip">
    ${text}
   </div>`;
  return elemToolTipItem;
}

elementHasTooltipArr.forEach((a, i) => {
  a.insertAdjacentHTML('beforeend', printToolTip(a.getAttribute('title')));
  a.addEventListener('click', (event) => {
    let elementTooltipArr = Array.from(document.querySelectorAll('.tooltip'));       // Новые элементы
    let elemToolTipNow = event.target.children.item(0);
    function printPosition() {
      let elementHasTooltipArrBottom = event.target.getBoundingClientRect().bottom;
      let elementHasTooltipArrLeft = event.target.getBoundingClientRect().left;
      elemToolTipNow.style = `left: ${elementHasTooltipArrLeft}px; top: ${elementHasTooltipArrBottom}px;`
    }
    
    window.addEventListener('scroll', () => {
      printPosition();
    });

    if (!numberElement && numberElement !== 0) {
      elemToolTipNow.classList.add('tooltip_active');
      numberElement = i;
    } else if (numberElement === i) {
      elemToolTipNow.classList.toggle('tooltip_active');
    }
    else {
      elementTooltipArr[numberElement].classList.remove('tooltip_active');
      elemToolTipNow.classList.add('tooltip_active');
      numberElement = i;
    }
    printPosition();
    event.preventDefault();
  }
);
});