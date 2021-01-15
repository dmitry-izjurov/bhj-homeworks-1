const loaderPreview = document.getElementById('loader');
const elemItems = document.getElementById('items');
let addItem = function(argCharCode, argValue) {
    return `<div class="item">
              <div class="item__code">
                ${argCharCode}
              </div>
              <div class="item__value">
                ${argValue}
              </div>
              <div class="item__currency">
                руб.
              </div>
            </div>`;
 }
let itemsStr = '';                                          // Все новые элементы для добавления
let xhr = new XMLHttpRequest();                             // Новый запрос

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = "json";
xhr.send();

xhr.addEventListener('load', () => {
  loaderPreview.classList.remove('loader_active');
  let objValute = xhr.response.response.Valute;
  console.log(objValute);
  for (let itemStr in objValute) {
    itemsStr += addItem(objValute[itemStr].CharCode, objValute[itemStr].Value);
  }
  elemItems.insertAdjacentHTML('beforeend', itemsStr);
});