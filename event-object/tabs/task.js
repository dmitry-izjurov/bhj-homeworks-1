let tabElements = document.getElementsByClassName('tab');
let tabContentElements = document.getElementsByClassName('tab__content');

for (let i = 0; i < tabElements.length; i++) {
  tabElements.item(i).addEventListener('click', printTabShowClick);

  function printTabShowClick() {
    if (tabElements.item(i).className === 'tab tab_active') {
        return false;
    }

    for (let a = 0; a < tabElements.length; a++) {
      tabElements.item(a).className = 'tab';
      tabContentElements.item(a).className = 'tab__content';
    }

    tabElements.item(i).className = 'tab tab_active';
    tabContentElements.item(i).className = 'tab__content tab__content_active';
  }
}