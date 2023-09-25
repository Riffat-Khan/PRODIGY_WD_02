let startTime;
let interval;
let running = false;

const stopwatch = document.querySelector('.stopwatch');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

startStopButton.addEventListener('click', () => {
    if (running) {
        clearInterval(interval);
        startStopButton.textContent = 'Start';
    } else {
        startTime = Date.now() - (startTime ? startTime : 0);
        interval = setInterval(updateStopwatch, 10);
        startStopButton.textContent = 'Stop';
    }
        
    running = !running;
    });

resetButton.addEventListener('click', () => {
    clearInterval(interval);
    stopwatch.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
    running = false;
    startTime = null;
    });

function updateStopwatch() {
    const currentTime = Date.now() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = Math.floor((currentTime % 1000) / 10);

    stopwatch.textContent = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}.${padNumber(milliseconds)}`;
}

function padNumber(number) {
    return number.toString().padStart(2, '0');
}


// time display
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    document.getElementById('clock').textContent = timeString;
}

    setInterval(updateClock, 60000);
    updateClock();