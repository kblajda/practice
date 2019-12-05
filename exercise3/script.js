const bttn = document.querySelector('button');
let fontSize = 10;
const listElements = document.querySelectorAll('li');
// I
// const showList = () => {
//     fontSize++;
//     for (let i = 0; i < listElements.length; i++) {
//         if (!listElements[i].style.display) {
//             listElements[i].style.display = 'block';
//         }
//         listElements[i].style.fontSize = `${fontSize}px`;
//     };
// };


// II
const showList = () => {
    fontSize++;
    listElements.forEach((listElement) => {
        listElement.style.display = 'block';
        listElement.style.fontSize = `${fontSize}px`;
    });
};
bttn.addEventListener('click', showList);