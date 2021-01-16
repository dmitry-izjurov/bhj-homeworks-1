const elemSignin = document.querySelector('#signin');
const form = document.querySelector('#signin__form');
const elemWelcome = document.querySelector('#welcome');
let elemUserId = document.querySelector('#user_id');
const elemButtonNew = `
  <button class="button">
    Выйти
  </button>`;

function saveValue(value) {
  localStorage.id = JSON.stringify(value);
}

function getValue() {
  try {
    return JSON.parse(localStorage.id);
  } catch (e) {
      return null;
    }
}

const getSignOut = function () {
  elemWelcome.classList.remove('welcome_active');
  elemSignin.classList.add('signin_active');
  document.querySelector('.button').remove();
  document.getElementsByName('login')[0].value = '';
  document.getElementsByName('password')[0].value = '';
  localStorage.clear();
}

if (localStorage.hasOwnProperty('id')) {
  elemWelcome.classList.add('welcome_active');
  elemUserId.textContent = getValue();
  elemWelcome.insertAdjacentHTML('afterend', elemButtonNew);
  document.querySelector('.button').addEventListener('click', getSignOut);
} else {
    elemSignin.classList.add('signin_active');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.responseType = "json";
  xhr.send(formData);
  console.log(xhr);
  xhr.addEventListener('readystatechange', function() {
      if (this.readyState == xhr.DONE && this.status == 200 && this.response.success === true && this.response.hasOwnProperty('user_id')) {
        elemSignin.classList.remove('signin_active');
        elemWelcome.classList.add('welcome_active');
        saveValue(this.response.user_id);
        elemUserId.textContent = this.response.user_id;
        elemWelcome.insertAdjacentHTML('afterend', elemButtonNew);
        document.querySelector('.button').addEventListener('click', getSignOut);
      } else if (this.readyState == xhr.DONE && this.status == 200 && this.response.success === false) {
        alert('Неверный логин/пароль');
      }
  });
});