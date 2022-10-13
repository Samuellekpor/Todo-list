import Task from "../src/modules/task";

export const addTask = (arr, description) => {
  const task = new Task(arr.length + 1, description, false);
  arr.push(task);
  return arr;
};

export const deleteTasks = (arr) => {
  const newarr = arr.filter((task) => task.completed !== true);
  for (let i = 0; i < newarr.length; i += 1) {
    newarr[i].index = i + 1;
  }
  return newarr;
};

export const updateTask = (id, input, arr) => {
  if (input !== "" && input !== arr[id - 1].description) {
    arr[id - 1].description = input;
  }
};

export const removeTask = (index, arr) => {
  arr.splice(index - 1, 1);
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i + 1;
  }

  return arr;
};

