let size = 10;
let orderElement = 1;


const init = () => {
    const bttn = document.createElement('button');
    const bttnReset = document.createElement('button');
    const list = document.createElement('ul');
    bttn.textContent = 'Create List';
    bttnReset.textContent = 'Clear';
    bttnReset.style.marginLeft = '20px';

    document.body.appendChild(bttn);
    document.body.appendChild(bttnReset);
    document.body.appendChild(list);
    bttn.addEventListener('click', createEl);
    bttnReset.addEventListener('click', clearEl);
}

const createEl = () => {

    for (i = 0; i < 10; i++) {
        let listEl = document.createElement('li');
        listEl.textContent = `Element nr  ${orderElement++}`;
        listEl.style.fontSize = `${size++}px`;
        const list = document.querySelector('ul').appendChild(listEl);
        size++;
    };

}

const clearEl = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
}
init()