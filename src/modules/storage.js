export const loadStorage = () => {
  if(localStorage.getItem('tasks') === null){
    return [];
  }else {
    return JSON.parse(localStorage.getItem('tasks'));
  }
}

export const updateStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}