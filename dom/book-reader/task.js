let elementsFont = document.querySelectorAll('.font-size');
let elementsFontSizeBook = document.getElementById('book');

for (let i = 0; i < elementsFont.length; i++){
  elementsFont.item(i).addEventListener('click', printFontClick);
  
  function printFontClick(event) {
    for (let a = 0; a < elementsFont.length; a++) {
      if (elementsFont.item(a).classList.contains('font-size_active')) {
        elementsFont.item(a).classList.toggle('font-size_active');
      }
    }

    elementsFont.item(i).classList.toggle('font-size_active');
    if (elementsFont.item(i).getAttribute('data-size') === 'small') {
      elementsFontSizeBook.className = 'book book_fs-small';
    } 
    
    else if 
       (elementsFont.item(i).getAttribute('data-size') === 'big') {
        elementsFontSizeBook.className = 'book book_fs-big';
    }

    else {
      elementsFontSizeBook.className = 'book';
    }

    event.preventDefault();
  }
}