const counter = () => {
    let seconds = 1;
    document.body.textContent = 0 + " sekund";

    const timer = () => {
        seconds++;
        document.body.textContent = seconds + " sekund";
        console.log(seconds);
    }
    return timer
}
const start = counter()
setInterval(start, 1000);