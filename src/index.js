import _ from 'lodash';
import './style.css';
import iconMove from './images/iconsMove.png';
import iconEnter from './images/enter.png';
import iconRefrech from './images/refresh.png';

const tasks = [
  {
    description: 'Lorem ipsum dolor',
    completed: false,
    index: 0
  },
  {
    description: 'Lorem ipsum dolor',
    completed: false,
    index: 1
  },
  {
    description: 'lorem',
    completed: false,
    index: 2
  }
];

function displayTasks(tasks) {
  const todoTitle = document.querySelector('.page-title');
  todoTitle.innerHTML = `<h1>Today's To Do</h1>
  <img class = "icon" src="${iconRefrech}" alt="refresh">`;

  const inputField = document.querySelector('.input');
  inputField.innerHTML = `<input id="add-input" type="text" placeholder="Add your list...">
  <img class = "icon" src="${iconEnter}" alt="enter-key">`;
  
  const todoContainer = document.querySelector('.todo-list');
  tasks.forEach((task) => {
    const taskContainer = document.createElement('li');
    taskContainer.className = 'task';
    taskContainer.innerHTML = `<input type="checkbox" name="checkbox" id="checkbox">
    <p class="description" contenteditable="true">${task.description}</p>
    <img class="move-image icon" src="${iconMove}" alt="move-icon">`;

    todoContainer.appendChild(taskContainer);
  });
}

displayTasks(tasks);