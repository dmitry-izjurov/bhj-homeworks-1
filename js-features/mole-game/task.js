for (let i = 1; i <= 9; i++) {
    let element = document.getElementById(`hole${i}`);
    
    element.onclick = printElement;
    
    function printElement() {
      let elementDead = document.getElementById("dead");
      let elementLost = document.getElementById("lost");
      
      if (element.className.includes( 'hole_has-mole' )) {
        elementDead.textContent = Number(elementDead.textContent) + 1;
      } else {
          elementLost.textContent = Number(elementLost.textContent) + 1;
      }
      
      if (elementDead.textContent == 10) {
          elementDead.textContent = 0;
          elementLost.textContent = 0;
          alert('Победа!');
      }
  
      if (elementLost.textContent == 5) {
          elementDead.textContent = 0;
          elementLost.textContent = 0;
          alert('Game over');
      }
    }
  }