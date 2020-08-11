let dropdownElements = document.getElementsByClassName('dropdown__value');
let dropdownShow = document.getElementsByClassName('dropdown__list');
let dropdownElement = document.getElementsByClassName('dropdown__link');

dropdownElements.item(this).addEventListener('click', printDropdownShowClick);

function printDropdownShowClick() {
  if (dropdownShow.item(this).className === 'dropdown__list') {
    dropdownShow.item(this).className = 'dropdown__list dropdown__list_active';
    
    for (let i = 0; i < dropdownElement.length; i++) {
        dropdownElement.item(i).addEventListener('click', printDropdownLinkClick);
        
        function printDropdownLinkClick(event) {
          dropdownElements.item(this).textContent = dropdownElement.item(i).textContent;
          dropdownShow.item(this).className = 'dropdown__list';
          event.preventDefault();
        }
      }

  } else if (dropdownShow.item(this).className === 'dropdown__list dropdown__list_active') {
    dropdownShow.item(this).className = 'dropdown__list';
  }
}