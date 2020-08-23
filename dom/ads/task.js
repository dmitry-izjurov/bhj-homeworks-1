let elementsRotator = document.querySelectorAll('.rotator__case');
let numberElementsRotator = 0;

const printTimer = function () {  
  function getElementsRotator() {
    elementsRotator.item(numberElementsRotator).classList.toggle('rotator__case_active');
  }

  getElementsRotator();
  numberElementsRotator += 1;

  if (numberElementsRotator == elementsRotator.length) {
    numberElementsRotator = 0;
  }
  
  getElementsRotator();
}

timer = setInterval(printTimer , 1000);