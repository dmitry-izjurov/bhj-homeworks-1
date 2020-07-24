const printTimer = function () {
    let getTimer = document.getElementById("timer");
    getTimer.textContent -= 1;
    if (getTimer.textContent == 0) {
      clearInterval(this.timerId);
      alert('Вы победили в конкурсе!');
    }
  }
  
  timerId = setInterval(printTimer , 1000);