const button = document.querySelector("button");
const section = document.querySelector(".elementsField")
let counter = 1;


const create = () => {
    const element = document.createElement('div');
    element.className = "elementsField__square";
    element.textContent = counter;

    if (counter % 3 == 0) {
        element.classList.add('circle');
    }
    section.appendChild(element);
    counter++;

}

button.addEventListener("click", create);