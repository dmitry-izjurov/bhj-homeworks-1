const elemEditor = document.querySelector('#editor');

function saveValue(value) {
  localStorage.editorValue = JSON.stringify(value);
}

function getValue() {
  try {
    return JSON.parse(localStorage.editorValue);
  } catch (e) {
      return null;
    }
}

if (localStorage.hasOwnProperty('editorValue')) {
    elemEditor.value = getValue();
}

elemEditor.addEventListener('change', () => {
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
  localStorage.clear();
});