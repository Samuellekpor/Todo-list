/**
 * @jest-environment jsdom
 */

 import { loadStorage, updateStorage } from '../../__mocks__/storage';
 import { addTask, removeTask, updateTask, deleteTasks } from '../../__mocks__/crud';
 import isComplete from './competetask';
 
 describe('Check of add and delete on dom', () => {
   test('Test adding of element to the list', () => {
     let tasks = loadStorage();
     tasks = addTask(tasks,"new task");
     updateStorage(tasks);
 
     const todoContainer = document.createElement('ul');
 
     tasks.forEach(() => {
       const taskContainer = document.createElement('li');
       todoContainer.appendChild(taskContainer);
     })
 
     expect(todoContainer.children).toHaveLength(1);
   })

   test('Test deleting of element from the list', () => {
    let tasks = loadStorage();
    tasks = removeTask(1, tasks);
    updateStorage(tasks);

    const todoContainer = document.createElement('ul');

    tasks.forEach(() => {
      const taskContainer = document.createElement('li');
      todoContainer.appendChild(taskContainer);
    })

    expect(todoContainer.children).toHaveLength(0);
  })
 })

 describe('Dom manipulation tests', () => {
    test('Testing display of elements', () => {
      let tasks = loadStorage();
      tasks = addTask(tasks,"new task");
      updateStorage(tasks);
  
      const todoContainer = document.createElement('ul');
      tasks.forEach((task) => {
        const taskContainer = document.createElement('li');
        taskContainer.innerHTML = `<input type="checkbox" class="checkbox" value="${task.completed}" name="checkbox" id="${task.index}">
        <p class="description" contenteditable="true">${task.description}</p>`;
    
        todoContainer.appendChild(taskContainer);
      });
  
      expect(todoContainer.children[0].children[0].id).toEqual('1');
      expect(todoContainer.children[0].children[1].textContent).toMatch('new task');
    });
  })