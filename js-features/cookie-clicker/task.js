let element = document.getElementById("clicker__counter");
let elementCookie = document.getElementById("cookie");

function setElement() {
  element.textContent = Number(element.textContent) + 1;
  this.width = 220;
}

function mouseReset() {
  this.width = 200;
}

elementCookie.onmousedown = setElement;
elementCookie.onmouseup = mouseReset;