import Task from './task';

export const addTask = (arr, description) => {
  const task = new Task((arr.length + 1) ,description,false);
  arr.push(task);
  return arr;
}

export const deleteTasks = arr => {
  let newarr = arr.filter((task) => task.completed !== true);
  for(let i = 0; i < newarr.length; i++) {
    newarr[i].index = i + 1;
  }
  return newarr;
}

export const updateTask = (id, input, arr) => {
  if (input !== '' && input !== arr[id-1].description) {
    arr[id-1].description = input;
  }
}

export const removeTask = (index, arr) => {
  let newarr = arr.filter((task) => task.index === index);
  for(let i = 0; i < newarr.length; i++) {
    newarr[i].index = i + 1;
  }

  return newarr;
}

export const isComplete = (arr,id) => {
  arr[id - 1].completed = !(arr[id - 1].completed);
  return arr;
}
