import { loadStorage, updateStorage } from '../../__mocks__/storage';

describe('Test the update of the local storage', () => {
  const getStorage = loadStorage();
  const arr = [
    { index: 1, description: 'Taskone', completed: false },
    { index: 2, description: 'Tasktwo', completed: true },
    { index: 3, description: 'Taskthree', completed: false },
    { index: 4, description: 'Taskfour', completed: true },
  ];

  const result = updateStorage(arr);
  expect(result.length).toEqual(4);
})