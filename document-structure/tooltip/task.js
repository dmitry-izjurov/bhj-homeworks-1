"use strict";
const elementHasTooltipArr = Array.from(document.querySelectorAll('.has-tooltip')); // ссылка с поздсказкой
let numberElement;                                                                  // Номера предыдущего активного элемента

elementHasTooltipArr.forEach((a, i) => {
  a.insertAdjacentHTML('beforeend', `<div class="tooltip">Текст подсказки</div>`);
  let elementTooltipArr = Array.from(document.querySelectorAll('.tooltip'));        // Новые элементы
  elementTooltipArr[i].textContent = a.getAttribute('title');
  a.addEventListener('click', showHint);
  function showHint(event) {
    if (numberElement === undefined) {
      elementTooltipArr[i].classList.add('tooltip_active');
      numberElement = i;
    } else if (elementTooltipArr[i].classList.contains('tooltip_active')) {
      elementTooltipArr[i].classList.remove('tooltip_active');
      numberElement = undefined;
    } else {
      elementTooltipArr[numberElement].classList.remove('tooltip_active');
      elementTooltipArr[i].classList.add('tooltip_active');
      numberElement = i;
    }
    event.preventDefault();
  }
});