const input = document.querySelector('input');
const ul = document.querySelector('ul');
// const liElements = document.querySelectorAll('li');
const liElements = document.getElementsByClassName('task');
const taskNumber = document.querySelector('h1 span');
const form = document.querySelector('form');


const removeTask = (e) => {
    e.target.parentNode.remove();
    // e.target.parentNode.style.textDecoration = "line-through";
    taskNumber.textContent = liElements.length;
}

const addTask = (e) => {
    e.preventDefault();
    const newTask = input.value;
    if (newTask === "") return;
    const createTask = document.createElement('li');
    createTask.className = 'task';
    createTask.innerHTML = newTask + "<button>Delete</button>";
    ul.appendChild(createTask);
    input.value = "";
    taskNumber.textContent = liElements.length;
    createTask.querySelector('button').addEventListener('click', removeTask);
}





// const serachTask = (e) => {
//     const searchText = e.target.value.toLowerCase()
//     let tasks = [...liElements];
//     tasks = tasks.filter(task => task.textContent.toLocaleLowerCase().includes(searchText))
//     console.log(tasks)
//     ul.textContent = "";
//     tasks.forEach(task => ul.appendChild(task))
// }

form.addEventListener('submit', addTask);
// input.addEventListener('input', serachTask);
// document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask))