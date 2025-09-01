let startTime, updatedTime, difference, timerInterval;
let running = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('start').addEventListener('click', () => {
    if (!running) {
        startTime = Date.now() - (difference || 0);
        timerInterval = setInterval(updateTime, 10);
        running = true;
    }
});

document.getElementById('pause').addEventListener('click', () => {
    clearInterval(timerInterval);
    running = false;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timerInterval);
    display.textContent = "00:00:00:00";
    laps.innerHTML = '';
    difference = 0;
    running = false;
});

document.getElementById('lap').addEventListener('click', () => {
    if (running) {
        const li = document.createElement('li');
        li.textContent = display.textContent;
        laps.appendChild(li);
    }
});

function updateTime() {
    updatedTime = Date.now() - startTime;
    difference = updatedTime;

    let milliseconds = Math.floor((difference % 1000) / 10);
    let seconds = Math.floor((difference / 1000) % 60);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

    display.textContent = 
        (hours < 10 ? "0" : "") + hours + ":" + 
        (minutes < 10 ? "0" : "") + minutes + ":" + 
        (seconds < 10 ? "0" : "") + seconds + ":" + 
        (milliseconds < 10 ? "0" : "") + milliseconds;
}