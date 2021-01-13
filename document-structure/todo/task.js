"use strict";
const elemTasksInput = document.querySelector('.tasks__input');   // Поле ввода
const elemButtonTasksAdd = document.querySelector('.tasks__add'); // Кнопка добавить
const elemTasksList = document.querySelector('.tasks__list');     // Список задач
let printElemTask = function(text) {
  let elemTaskItem = 
  `<div class="task">
     <div class="task__title">
       ${text}
     </div>
     <a href="#" class="task__remove">&times;</a>
   </div>`;
   return elemTaskItem;
}                                                                 // Задача

elemButtonTasksAdd.addEventListener('click', addTask);
function addTask(event) {
  if (elemTasksInput.value !== '') {
    let elemInputValue = elemTasksInput.value;
    elemTasksList.insertAdjacentHTML('beforeend', printElemTask(elemInputValue));
    let elemTaskItemArr = Array.from(document.querySelectorAll('.task'));
    let elemTaskItemTaskTitleArr = Array.from(document.querySelectorAll('.task__title'));
    let elemTaskRemoveArr = Array.from(document.querySelectorAll('.task__remove'));
    elemTaskItemTaskTitleArr[elemTaskItemArr.length - 1].textContent = elemInputValue;
    elemTaskRemoveArr[elemTaskItemArr.length - 1].addEventListener('click', (event) => {
      event.target.closest('.task').remove();
    });
  }
  elemTasksInput.value = '';
  event.preventDefault();
}