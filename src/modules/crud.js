import Task from './task';

export const addTask = (arr, description) => {
  const task = new Task((arr.length + 1) ,description,false);
  arr.push(task);
}

export const deleteTasks = arr => {
  arr = arr.filter((task) => task.completed !== true);
  for(let i = 0; i < arr.length; i++) {
    arr[i].index = i + 1;
  }
}

export const updateTask = (id, input, arr) => {
  if (input !== '') {
    arr[id].description = input;
  }
}

export const removeTask = (index, arr) => {
  arr.slice(index,1);
  for(let i = 0; i < arr.length; i++) {
    arr[i].index = i + 1;
  }
}
