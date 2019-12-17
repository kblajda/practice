const start = document.querySelector('.main');
const reset = document.querySelector('.reset');

const panel = document.querySelector('.time div ');


let time = 0;
let active = false;
let idInter;

const timer = () => {
    if (!active) {
        active = !active;
        start.textContent = 'Pauza';
        idInter = setInterval(startTimer, 10);
    } else {
        active = !active;
        start.textContent = 'Start';
        clearInterval(idInter);
    }
}
const startTimer = () => {
    time++;
    panel.textContent = (time / 100).toFixed(2);
}
const resetTime = () => {
    time = 0;
    panel.textContent = '---';
    active = false;
    start.textContent = 'Start';
    clearInterval(idInter);
}
start.addEventListener('click', timer);
reset.addEventListener('click', resetTime);