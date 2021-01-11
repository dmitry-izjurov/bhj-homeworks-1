"use strict";
const elemTasksInput = document.querySelector('.tasks__input');   // Поле ввода
const elemButtonTasksAdd = document.querySelector('.tasks__add'); // Кнопка добавить
const elemTasksList = document.querySelector('.tasks__list');     // Список задач
let elemTask = `<div class="task">
                  <div class="task__title">
                    Сходить в магазин
                  </div>
                  <a href="#" class="task__remove">&times;</a>
                </div>`;                                          // Задача

elemButtonTasksAdd.addEventListener('click', addTask);
function addTask(event) {
  if (elemTasksInput.value !== '') {
    elemTasksList.insertAdjacentHTML('beforeend', elemTask);
    let elemTaskItem = Array.from(document.querySelectorAll('.task'));
    let elemTaskItemTaskTitleArr = Array.from(document.querySelectorAll('.task__title'));
    let elemTaskRemoveArr = Array.from(document.querySelectorAll('.task__remove'));
    elemTaskItemTaskTitleArr[elemTaskItem.length - 1].textContent = elemTasksInput.value;
    elemTaskRemoveArr[elemTaskItem.length - 1].addEventListener('click', (event) => {
      event.target.closest('.task').remove();
    });
  }
  elemTasksInput.value = '';
  event.preventDefault();
}