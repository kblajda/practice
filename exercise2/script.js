document.body.style.height = '1000vh';

let size = 100;
let element = document.createElement('div');
let toggleFlag = true;

element.style.width = '100%';
element.style.height = size + "px";
element.style.position = 'fixed';
element.style.top = '0';
element.style.left = '0';
element.style.backgroundColor = '#ccc';
document.body.appendChild(element);

const changeHeight = () => {
    if (size > window.innerHeight / 2) {
        toggleFlag = !toggleFlag;
        element.style.backgroundColor = "#bbb";
    } else if (size <= 0) {
        toggleFlag = !toggleFlag;
    }
    if (toggleFlag) {
        size += 10;
    } else {
        size -= 10;
    }
    element.style.height = size + "px";
}
window.addEventListener('scroll', changeHeight);