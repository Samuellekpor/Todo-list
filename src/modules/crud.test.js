import { addTask, removeTask } from '../../__mocks__/crud';

describe("add and remove tasks from array", () => {
  test("should add task to the list", () => {
    const arr = [
      { index: 1, description: "Taskone", completed: false },
      { index: 2, description: "Tasktwo", completed: false },
    ];

    const expected = [
      { index: 1, description: "Taskone", completed: false },
      { index: 2, description: "Tasktwo", completed: false },
      { index: 3, description: "Taskthree", completed: false},
    ];
    const result = addTask(arr, "Taskthree");
    expect(result).toEqual(expected);
    expect(result.length).toBe(expected.length);
  });

  test("should remove task from the list", () => {
    const arr = [
      { index: 1, description: "Taskone", completed: false },
      { index: 2, description: "Tasktwo", completed: false },
    ];

    const expected = [
      { index: 1, description: "Taskone", completed: false },
    ];
    const result = removeTask(2, arr);
    expect(result).toEqual(expected);
    expect(result.length).toBe(expected.length);
  });

});
