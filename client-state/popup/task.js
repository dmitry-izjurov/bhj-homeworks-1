const elemModalWindow = document.querySelector('#subscribe-modal');
const elenModalWindowClose = document.querySelector('.modal__close');

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts
    .pop()
    .split(";")
    .shift();
  }
}

if (!getCookie('elemModalWindow')) {
  elemModalWindow.classList.add('modal_active');
}

elenModalWindowClose.addEventListener('click', function() {
  elemModalWindow.classList.remove('modal_active');
  document.cookie = 'elemModalWindow=Close';
});