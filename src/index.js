import './style.css';
import iconMove from './images/iconsMove.png';
import iconEnter from './images/enter.png';
import iconRefrech from './images/refresh.png';
import {laodStorage,updateStorage} from './modules/storage';
import {addTask,deleteTasks,updateTask,removeTask} from './modules/crud';

const tasks = [];

const displayTasks = (tasks) => {
  const todoTitle = document.querySelector('.page-title');
  todoTitle.innerHTML = `<h1>Today's To Do</h1>
  <img class = "icon" src="${iconRefrech}" alt="refresh">`;

  const inputField = document.querySelector('.input');
  inputField.innerHTML = `<input id="add-input" type="text" placeholder="Add your list...">
  <button type = "submit"><img class = "icon" src="${iconEnter}" alt="enter-key"></button>`;

  const todoContainer = document.querySelector('.todo-list');
  tasks.forEach((task) => {
    const taskContainer = document.createElement('li');
    taskContainer.className = 'task';
    taskContainer.innerHTML = `<input type="checkbox" name="checkbox" id="checkbox">
    <p class="description" contenteditable="true">${task.description}</p>
    <img class="move-image icon" src="${iconMove}" alt="move-icon">`;

    todoContainer.appendChild(taskContainer);
  });
};

displayTasks(tasks);