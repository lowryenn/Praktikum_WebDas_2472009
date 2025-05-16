let mode = "Pomodoro";
let timerStart = false;
let timer = null; // pakai interval timer
let remainingTime = 0;

function switchMode(modeNumber) {
    let timerDisplay = document.getElementById('timer');
    let ttimer = document.getElementById('ttimer');
    let body = document.body;

    resetTimer();

    if (modeNumber === 0) {
        mode = "Pomodoro";
        body.style.backgroundColor = '#894682';
        timerDisplay.innerHTML = '25:00';
        ttimer.innerHTML = 'Focus pocus!';
    } else {
        mode = "Short Break";
        body.style.backgroundColor = '#4988BB';
        timerDisplay.innerHTML = '5:00';
        ttimer.innerHTML = 'Rest time!!';
    }
}

function startTimer() {
    let bTimer = document.getElementById('bTimer');
    let timerDisplay = document.getElementById('timer');

    if (timerStart) {
        resetTimer();
        return;
    }

    timerStart = true;
    bTimer.innerHTML = "RESET";

    remainingTime = mode === "Pomodoro" ? 25 * 60 : 5 * 60;

    timer = setInterval(() => {
        if (!timerStart) return;

        let minutes = Math.floor(remainingTime / 60);
        let seconds = remainingTime % 60;
        let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay.innerHTML = `${minutes}:${formattedSeconds}`;

        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(timer);
            alert("Time's up!");
            resetTimer();
            timerDisplay.innerHTML = mode === "Pomodoro" ? '25:00' : '5:00';
        }
    }, 1000);
}

function resetTimer() {
    if (timerStart) {
        clearInterval(timer);
        timerStart = false;
        document.getElementById('bTimer').innerHTML = "START";
    }
}
