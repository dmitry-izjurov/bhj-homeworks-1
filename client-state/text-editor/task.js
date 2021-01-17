const elemEditor = document.querySelector('#editor');

function saveValue(value) {
  localStorage.editorValue = value;
}

function getValue() {
  return localStorage.getItem('editorValue');
}

if (localStorage.hasOwnProperty('editorValue')) {
    elemEditor.value = getValue();
}

elemEditor.addEventListener('input', () => {
  saveValue(elemEditor.value);
});

const elemButtonNew = `
  <button class="button">
    очистить
  </button>
`;

elemEditor.insertAdjacentHTML('afterend', elemButtonNew);
const elemButton = document.querySelector('.button').addEventListener('click', () => {
  elemEditor.value = '';
  localStorage.removeItem('editorValue');
});