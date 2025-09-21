// ==============================
// ストップウォッチ
// ==============================
const stopwatchDisplay = document.getElementById("stopwatchDisplay");
const startStopwatchBtn = document.getElementById("startStopwatch");
const pauseStopwatchBtn = document.getElementById("pauseStopwatch");
const resetStopwatchBtn = document.getElementById("resetStopwatch");

let stopwatchInterval;
let stopwatchStartTime;
let stopwatchElapsed = 0;
let stopwatchRunning = false;

function updateStopwatch() {
  const now = Date.now();
  const diff = now - stopwatchStartTime + stopwatchElapsed;

  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  const milliseconds = diff % 1000;

  stopwatchDisplay.textContent =
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}.` +
    `${String(milliseconds).padStart(3, "0")}`;
}

startStopwatchBtn.addEventListener("click", () => {
  if (!stopwatchRunning) {
    stopwatchStartTime = Date.now();
    stopwatchInterval = setInterval(updateStopwatch, 10);
    stopwatchRunning = true;
  }
});

pauseStopwatchBtn.addEventListener("click", () => {
  if (stopwatchRunning) {
    clearInterval(stopwatchInterval);
    stopwatchElapsed += Date.now() - stopwatchStartTime;
    stopwatchRunning = false;
  }
});

resetStopwatchBtn.addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchElapsed = 0;
  stopwatchRunning = false;
  stopwatchDisplay.textContent = "00:00.000";
});

// ==============================
// タイマー
// ==============================
const timerMinutesInput = document.getElementById("timerMinutes");
const timerSecondsInput = document.getElementById("timerSeconds");
const timerDisplay = document.getElementById("timerDisplay");
const startTimerBtn = document.getElementById("startTimer");
const pauseTimerBtn = document.getElementById("pauseTimer");
const resetTimerBtn = document.getElementById("resetTimer");

let timerInterval;
let timerRemaining = 0;
let timerRunning = false;

function updateTimerDisplay(ms) {
  const totalSeconds = Math.ceil(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  timerDisplay.textContent =
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`;
}

startTimerBtn.addEventListener("click", () => {
  if (!timerRunning) {
    if (timerRemaining <= 0) {
      const minutes = parseInt(timerMinutesInput.value, 10) || 0;
      const seconds = parseInt(timerSecondsInput.value, 10) || 0;
      timerRemaining = (minutes * 60 + seconds) * 1000;
    }

    timerInterval = setInterval(() => {
      timerRemaining -= 1000;
      updateTimerDisplay(timerRemaining);

      if (timerRemaining <= 0) {
        clearInterval(timerInterval);
        timerRunning = false;
        alert("タイマー終了！");
      }
    }, 1000);

    timerRunning = true;
  }
});

pauseTimerBtn.addEventListener("click", () => {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
  }
});

resetTimerBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerRunning = false;
  timerRemaining = 0;
  updateTimerDisplay(0);
});