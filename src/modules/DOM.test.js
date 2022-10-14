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
