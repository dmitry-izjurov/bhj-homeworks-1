'use strict';

let elementsCheckbox = document.querySelectorAll('.interest__check');
let elementsListCheckbox = document.querySelectorAll('.interests_active');

for (let i = 0; i < elementsCheckbox.length; i++) {
  elementsCheckbox.item(i).addEventListener('click', () => {
    
    let elementParent = elementsCheckbox.item(i).closest('.interests');
    
    function printCheck(checked) {
      if (elementParent.className === 'interests interests_main' && elementsCheckbox.item(i).checked === checked) {
        for (let a = 0; a < elementsCheckbox.length; a++) {
          let getElementsCheckbox = elementsCheckbox.item(a).closest('.interests');
          
          if (getElementsCheckbox.className === 'interests interests_active'
            && getElementsCheckbox.previousElementSibling.children[0].checked === checked) {
            elementsCheckbox.item(a).checked = checked;
          }
        }
      }
    }
    printCheck(true);
    printCheck(false);
  });
}