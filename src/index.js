import './style.css';
import iconMove from './images/iconsMove.png';
import iconEnter from './images/enter.png';
import iconRefrech from './images/refresh.png';
import iconDelete from './images/trash.png';
import { loadStorage, updateStorage } from './modules/storage';
import {
  addTask, deleteTasks, updateTask, removeTask,
} from './modules/crud';
import isComplete from './modules/competetask';

let tasks;

tasks = loadStorage();

const displayTasks = (tasks) => {
  const todoTitle = document.querySelector('.page-title');
  todoTitle.innerHTML = `<h1>Today's To Do</h1>
  <img class="icon" src="./${iconRefrech}" alt="refresh">`;

  const inputField = document.querySelector('.input');
  inputField.innerHTML = `<input id="add-input" type="text" placeholder="Add to your list...">
  <a class="submit-button" type="submit"><img class="icon" src="./${iconEnter}" alt="enter-key"></a>`;

  const todoContainer = document.querySelector('.todo-list');
  tasks.forEach((task) => {
    const taskContainer = document.createElement('li');
    taskContainer.className = 'task';
    taskContainer.innerHTML = `<input type="checkbox" class="checkbox" value="${task.completed}" name="checkbox" id="${task.index}">
    <p class="description" contenteditable="true">${task.description}</p>
    <img class="move-image icon" id="iconMove" src="./${iconMove}" alt="move-icon">
    <img class="hide move-image icon" id="iconDelete" src="./${iconDelete}" alt="move-icon">`;

    todoContainer.appendChild(taskContainer);
  });
};

displayTasks(tasks);

const enterBtn = document.querySelector('.submit-button');
const input = document.querySelector('#add-input');
const clearLink = document.querySelector('.link');

enterBtn.addEventListener('click', () => {
  if (input.value !== '') {
    tasks = addTask(tasks, input.value);
    updateStorage(tasks);
    tasks = loadStorage();
    window.location.reload();
  }
});

const edittables = document.querySelectorAll('[contenteditable]');

edittables.forEach((editable) => {
  const moveIcon = editable.nextElementSibling;
  const deleteIcon = moveIcon.nextElementSibling;

  editable.addEventListener('focus', (event) => {
    event.target.parentElement.className = 'bisque';
    event.target.style.outline = '0';
    deleteIcon.className = 'show icon';
    moveIcon.className = 'hide';
  });

  editable.addEventListener('blur', (event) => {
    event.target.parentElement.className = 'task';
    deleteIcon.className = 'icon';
    moveIcon.className = 'icon move-image';

    const firstTag = editable.firstChild.nodeName;
    const keyTag = new RegExp(
      firstTag === '#text' ? '<br' : `</${firstTag}`,
      'i',
    );
    const tmp = document.createElement('p');
    tmp.innerHTML = editable.innerHTML
      .replace(/<[^>]+>/g, (m) => (keyTag.test(m) ? '{ß®}' : ''))
      .replace(/{ß®}$/, '');
    const edited = tmp.innerText.replace(/{ß®}/g, '\n');

    const theId = event.target.parentElement.children[0].id;

    updateTask(theId, edited, tasks);
    updateStorage(tasks);
    loadStorage();
  });

  deleteIcon.addEventListener('click', (event) => {
    const theId = event.target.parentElement.children[0].id;
    const newtasks = removeTask(theId, tasks);
    updateStorage(newtasks);
    tasks = loadStorage();
    window.location.reload();
  });
});

const checkBoxs = document.querySelectorAll('.checkbox');

checkBoxs.forEach((check) => {
  const task = tasks[check.id - 1];
  if (task.completed) {
    check.checked = true;
    check.nextElementSibling.className = 'description checked';
  }

  check.addEventListener('click', () => {
    tasks = loadStorage();
    isComplete(tasks, task.index);
    updateStorage(tasks);
    window.location.reload();
  });
});

clearLink.addEventListener('click', () => {
  tasks = deleteTasks(tasks);
  updateStorage(tasks);
  tasks = loadStorage();
  window.location.reload();
});
