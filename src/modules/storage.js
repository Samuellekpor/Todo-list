export const loadStorage = () => JSON.parse(localStorage.getItem('tasks')) || [];

export const updateStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}