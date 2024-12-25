let timer;
let isRunning = false;
let minutes = 25;
let seconds = 0;
let isStarted = false;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-pause');
const resetButton = document.getElementById('reset');

function updateDisplay() {
    timerDisplay.textContent = 
        `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    console.log('Start');
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (seconds === 0) 
            {
                if (minutes === 0) 
                {
                    clearInterval(timer);
                    isRunning = false;
                } 
                else 
                {
                    minutes--;
                    seconds = 59;
                }
            } 
            else 
            {
                seconds--;
            }
            updateDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    console.log('Pause');
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    console.log('Reset');
    if (document.querySelector('.container').classList.contains('pomodoro')) {
        clearInterval(timer);
        isRunning = false;
        minutes = 25;
        seconds = 0;
        updateDisplay();
    } else if (document.querySelector('.container').classList.contains('short')) {
        clearInterval(timer);
        isRunning = false;
        minutes = 5;
        seconds = 0;
        updateDisplay();
    } else if (document.querySelector('.container').classList.contains('long')) {
        clearInterval(timer);
        isRunning = false;
        minutes = 15;
        seconds = 0;
        updateDisplay();
    }
}

startButton.addEventListener('click',  () => {
    if (isStarted) {
        pauseTimer();
        startButton.textContent = 'Start';
    } else {
        startTimer();
        startButton.textContent = 'Pause';
    }
    isStarted = !isStarted;
  });

resetButton.addEventListener('click', resetTimer);

document.getElementById('pomodoro').addEventListener('click', function() {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.classList.add('pomodoro-active');
        button.classList.remove('short-active');
        button.classList.remove('long-active');
    });
    document.querySelector('.container').classList.remove('short', 'long');
    document.querySelector('.container').classList.add('pomodoro');
    document.querySelector('#navHead').classList.remove('short', 'long');
    document.querySelector('#navHead').classList.add('pomodoro');
    document.querySelector('.container h1').innerHTML = 'Pomodoro Timer';
    minutes = 25;
    seconds = 0;
    updateDisplay();
 });

 document.getElementById('short').addEventListener('click', function() {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.classList.remove('pomodoro-active');
        button.classList.add('short-active');
        button.classList.remove('long-active');
    });
    document.querySelector('.container').classList.remove('pomodoro', 'long');
    document.querySelector('.container').classList.add('short');
    document.querySelector('#navHead').classList.remove('pomodoro', 'long');
    document.querySelector('#navHead').classList.add('short');
    document.querySelector('.container h1').innerHTML = 'Short Break';
    minutes = 5;
    seconds = 0;
    updateDisplay();
 });

 document.getElementById('long').addEventListener('click', function() {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.classList.remove('pomodoro-active');
        button.classList.remove('short-active');
        button.classList.add('long-active');
    });
    document.querySelector('.container').classList.remove('pomodoro', 'short');
    document.querySelector('.container').classList.add('long');
    document.querySelector('#navHead').classList.remove('pomodoro', 'short');
    document.querySelector('#navHead').classList.add('long');
    document.querySelector('.container h1').innerHTML = 'Long Break';
    minutes = 15;
    seconds = 0;
    updateDisplay();
 });

updateDisplay();