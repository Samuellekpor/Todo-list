const isComplete = (arr, id) => {
  arr[id - 1].completed = !(arr[id - 1].completed);
  return arr;
};

export default isComplete;
