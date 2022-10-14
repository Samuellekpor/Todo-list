import isComplete from '../../__mocks__/completetask';
import {
  addTask, removeTask, updateTask, deleteTasks,
} from '../../__mocks__/crud';

describe('add and remove tasks from array', () => {
  test('should add task to the list', () => {
    const arr = [
      { index: 1, description: 'Taskone', completed: false },
      { index: 2, description: 'Tasktwo', completed: false },
    ];

    const expected = [
      { index: 1, description: 'Taskone', completed: false },
      { index: 2, description: 'Tasktwo', completed: false },
      { index: 3, description: 'Taskthree', completed: false },
    ];
    const result = addTask(arr, 'Taskthree');
    expect(result).toEqual(expected);
    expect(result.length).toBe(expected.length);
  });

  test('should remove task from the list', () => {
    const arr = [
      { index: 1, description: 'Taskone', completed: false },
      { index: 2, description: 'Tasktwo', completed: false },
    ];

    const expected = [
      { index: 1, description: 'Taskone', completed: false },
    ];
    const result = removeTask(2, arr);
    expect(result).toEqual(expected);
    expect(result.length).toBe(expected.length);
  });

  test('Should update a task', () => {
    const arr = [
      { index: 1, description: 'Taskone', completed: false },
      { index: 2, description: 'Tasktwo', completed: false },
    ];

    const expected = [
      { index: 1, description: 'Taskone', completed: false },
      { index: 2, description: 'New task', completed: false },
    ];
    const result = updateTask(2, 'New task', arr);
    expect(result).toEqual(expected);
  });

  test('Remove all completed tasks', () => {
    const arr = [
      { index: 1, description: 'Taskone', completed: false },
      { index: 2, description: 'Tasktwo', completed: true },
      { index: 3, description: 'Taskthree', completed: false },
      { index: 4, description: 'Taskfour', completed: true },
    ];

    const expected = [
      { index: 1, description: 'Taskone', completed: false },
      { index: 2, description: 'Taskthree', completed: false },
    ];
    const result = deleteTasks(arr);
    expect(result).toEqual(expected);
  });

  test('Update an item\'s completed status', () => {
    const arr = [
      { index: 1, description: 'Taskone', completed: false },
      { index: 2, description: 'Tasktwo', completed: true },
      { index: 3, description: 'Taskthree', completed: false },
      { index: 4, description: 'Taskfour', completed: true },
    ];

    const expected = [
      { index: 1, description: 'Taskone', completed: false },
      { index: 2, description: 'Tasktwo', completed: false },
      { index: 3, description: 'Taskthree', completed: false },
      { index: 4, description: 'Taskfour', completed: true },
    ];

    const result = isComplete(arr, 2);

    expect(result).toEqual(expected);
    expect(isComplete(arr, 3)).toEqual([
      { index: 1, description: 'Taskone', completed: false },
      { index: 2, description: 'Tasktwo', completed: false },
      { index: 3, description: 'Taskthree', completed: true },
      { index: 4, description: 'Taskfour', completed: true },
    ]);
  });
});
