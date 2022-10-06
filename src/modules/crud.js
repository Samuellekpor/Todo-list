import Task from './task';

const addTask = (arr, description) => {
  const task = new Task((arr.length + 1) ,description,false);
  arr.push(task);
}

const deleteTask = arr => {
  arr = arr.filter((task) => task.completed !== true);
}
