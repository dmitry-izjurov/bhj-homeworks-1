const elementChatWidget = document.querySelector('.chat-widget');
elementChatWidget.addEventListener('click', () => elementChatWidget.className = 'chat-widget chat-widget_active');

const elementInput = document.getElementById('chat-widget__input');

elementInput.addEventListener('keypress', (event) => {
  if (event.code === 'Enter' && elementInput.value !== '') {
    elementInput.addEventListener('change', printChat);
  }
});

function printChat() {
  let time = new Date();
  let hours = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
  let minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;
  let timeNow = `${hours}:${minutes}`;

  // --------------------------------------
  const messages = document.querySelector('.chat-widget__messages');
  
  messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time"></div>
    <div class="message__text"></div>
  </div>
  `;

  // --------------------------------------

  let elementsMessageTimeClient = document.querySelectorAll('.message__time');
  elementsMessageTimeClient.item(elementsMessageTimeClient.length - 1).textContent = timeNow;
 
  let elementsMessageTextClient = document.querySelectorAll('.message__text')
  elementsMessageTextClient.item(elementsMessageTextClient.length - 1).textContent = elementInput.value;
 
  // --------------------------------------

  messages.innerHTML += `
  <div class="message">
    <div class="message__time"></div>
    <div class="message__text"></div>
  </div>
  `;

  function getWord() {
    let messagesBot = [
      'Мы устали',
      'Нам лень',
      'Напишите в следующий раз',
      'Досвидание!',
      'Мы заняты!',
      'Где Ваша совесть?',
      'К сожалению все операторы сейчас заняты. Напишите через 10 лет',
      'Мы ничего не будем Вам продавать!'
    ];
    let index = Math.floor(Math.random() * messagesBot.length);

    return messagesBot[index];
  }

  let elementsMessageTime = document.querySelectorAll('.message__time');
  elementsMessageTime.item(elementsMessageTime.length - 1).textContent = timeNow;

  let elementsMessageText = document.querySelectorAll('.message__text')
  elementsMessageText.item(elementsMessageText.length - 1).textContent = getWord();
  
  elementInput.value = '';
}