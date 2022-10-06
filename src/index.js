import './style.css';
import iconMove from './images/iconsMove.png';
import iconEnter from './images/enter.png';
import iconRefrech from './images/refresh.png';
import iconDelete from './images/trash.png'
import {loadStorage,updateStorage} from './modules/storage.js';
import {addTask,deleteTasks,updateTask,removeTask} from './modules/crud.js';

let tasks;

tasks = loadStorage();

const displayTasks = (tasks) => {
  const todoTitle = document.querySelector('.page-title');
  todoTitle.innerHTML = `<h1>Today's To Do</h1>
  <img class="icon" src="${iconRefrech}" alt="refresh">`;

  const inputField = document.querySelector('.input');
  inputField.innerHTML = `<input id="add-input" type="text" placeholder="Add your list...">
  <button class="submit-button" type="submit"><img class="icon" src="${iconEnter}" alt="enter-key"></button>`;

  const todoContainer = document.querySelector('.todo-list');
  tasks.forEach((task) => {
    const taskContainer = document.createElement('li');
    taskContainer.className = 'task';
    taskContainer.innerHTML = `<input type="checkbox" name="checkbox" id="${task.index}">
    <p class="description" contenteditable="true">${task.description}</p>
    <img class="move-image icon" src="${iconMove}" alt="move-icon">
    <img class="hide move-image icon" src="${iconDelete}" alt="move-icon">`;

    todoContainer.appendChild(taskContainer);
  });
};

displayTasks(tasks);

const enterBtn = document.querySelector('.submit-button');
const input = document.querySelector('#add-input');

enterBtn.addEventListener('click', () => {
  if (input.value !== '') {
    addTask(tasks, input.value);
  updateStorage(tasks);
  loadStorage();
  }
});