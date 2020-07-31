let links = document.getElementsByClassName('menu__link');

for (let i = 0; i < links.length; i++) {
  links.item(i).onclick = menuTwoLevelShow;

  function menuTwoLevelShow() {
    let menuTwoLevel = links.item(i).nextElementSibling;    
    let menuTwoLevelReset = document.querySelectorAll('.menu_sub');

    for (let a = 0; a < menuTwoLevelReset.length; a++) {
      if (menuTwoLevelReset.item(a).className === 'menu menu_sub menu_active') {
        menuTwoLevelReset.item(a).className = 'menu menu_sub';
      }
    }

    if (menuTwoLevel.className === 'menu menu_sub') {
      menuTwoLevel.className = 'menu menu_sub menu_active';
    }
    return false;
  }  
}