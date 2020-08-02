let mainModal = document.getElementById("modal_main");
mainModal.className = 'modal modal_active';

function modalCloseClick() {
   this.className = 'modal';
}

mainModal.onclick = modalCloseClick;

let modalSuccessShow = document.querySelector('.show-success');
let modalSuccess = document.getElementById("modal_success");

function modalSuccessClick() {
  mainModal.className = 'modal';
  modalSuccess.className = 'modal modal_active';
}

modalSuccessShow.onclick = modalSuccessClick;
modalSuccess.onclick = modalCloseClick;