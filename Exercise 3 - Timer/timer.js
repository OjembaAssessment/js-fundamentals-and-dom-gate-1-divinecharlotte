console.log("Exercise 3 - Timer");
let time = 0;
let whenRunning = false;


function updatetimerOnUi() {
  const timerOnUi = document.getElementById("myTimer");
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerOnUi.textContent = `${seconds.toString()}`;

}
let timer;

function startTimer() {
  if (!whenRunning) {
    whenRunning = true;
    timer = setInterval(() => {
      if (time > 0) {
        time--;
        updatetimerOnUi();
      } else {
        clearInterval(timer);
        whenRunning = false;
        updatetimerOnUi();
      }
    }, 1000);
  }
}


function stopTimer() {
  if (whenRunning) {
    clearInterval(timer);
    whenRunning = false;
    updatetimerOnUi();
  }
}

function addSecond() {
  if (!whenRunning) {
    time++;
    updatetimerOnUi();
  }
}


function subtractSecond() {
  if (!whenRunning && time > 0) {
    time--;
    updatetimerOnUi();
  }
}

function resetTimer() {
  if (!whenRunning) {
    time = 0;
    updatetimerOnUi();
  }
}

document.getElementById("startStopBtn").addEventListener("click", () => {
  if (whenRunning) {
    stopTimer();
    document.getElementById("startStopBtn").textContent = "Start";
  } else {
    startTimer();
    document.getElementById("startStopBtn").textContent = "Stop";
  }
});

document.getElementById("addBtn").addEventListener("click", addSecond);

document.getElementById("subtractBtn").addEventListener("click", subtractSecond);

document.getElementById("resetBtn").addEventListener("click", resetTimer);
