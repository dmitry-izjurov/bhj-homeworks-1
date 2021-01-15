const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.upload.addEventListener('progress', (event) => {
    progress.value = Number(event.loaded) / Number(event.total);
  });
  xhr.send(formData);
});
