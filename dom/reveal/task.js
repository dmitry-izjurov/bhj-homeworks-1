let elementsScroll = document.getElementsByClassName('reveal');

for (let i = 0; i < elementsScroll.length; i++) {
  window.addEventListener('scroll', printShowElements);
  
  function printShowElements() {
    let viewportHeight = window.innerHeight;
    let elementTop = elementsScroll.item(i).getBoundingClientRect().top;
    if (elementTop < viewportHeight / 2) {
      elementsScroll.item(i).className = 'reveal reveal_active';
    }
  }
}