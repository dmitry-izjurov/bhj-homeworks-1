let mainModal = document.getElementById("modal_main");
mainModal.className = 'modal modal_active';

let modalClose = document.getElementsByClassName('modal__close');
function modalCloseClick() {
   mainModal.className = 'modal';
   modalSuccess.className = 'modal';
}

modalClose.item(0).onclick = modalCloseClick;
modalClose.item(2).onclick = modalCloseClick;

let modalSuccessShow = document.querySelector('.show-success');
let modalSuccess = document.getElementById("modal_success");

function modalSuccessClick() {
  mainModal.className = 'modal';
  modalSuccess.className = 'modal modal_active';
}

modalSuccessShow.onclick = modalSuccessClick;