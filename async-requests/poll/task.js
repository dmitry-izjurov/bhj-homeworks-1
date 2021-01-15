let elemPool = document.querySelector('.poll');
let elemPollTitle = document.querySelector('.poll__title');
let elemPollAnswers = document.querySelector('.poll__answers');

let addItemQuestion = function(argQuestion) {
    return `<div class="poll">
              <div class="poll__title" id="poll__title">
                ${argQuestion}
              </div>
              <div class="poll__answers poll__answers_active" id="poll__answers">`;
}                                                                     // Добавляем вопрос

let addItemAnswer = function(argAnswer) {
    return `<button class="poll__answer">
              ${argAnswer}
            </button>`;
}                                                                     // Добавляем ответ

let xhr = new XMLHttpRequest();                                       // Новый запрос
let itemsStr = '';                                                    // Все новые элементы для добавления

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = "json";
xhr.send();

xhr.addEventListener('load', () => {
  let objPollTitle = xhr.response.data.title;
  let objPollAnswers = xhr.response.data.answers;

  itemsStr += addItemQuestion(objPollTitle);
  if (Array.isArray(objPollAnswers)) {
    objPollAnswers.forEach(a => {
        itemsStr += addItemAnswer(String(a));
    });
  } else {
    throw new Error('Ошибка при передаче данных с сервера');
  }

  itemsStr += `</div></div>`;
  elemPool.insertAdjacentHTML('afterend', itemsStr);
  
  let pollAnswer = document.querySelectorAll('.poll__answer');
  Array.from(pollAnswer).forEach(a => {
    a.addEventListener('click', function() {
      alert('Спасибо, ваш голос засчитан!');
    })
  })
});