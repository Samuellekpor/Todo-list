import { addTask } from "../../__mocks__/crud";

jest.mock("../../__mocks__/crud");

describe("addTask", () => {
  test("should add task to the list", () => {
    const arr = [
      { index: 1, description: "Taskone", completed: false },
      { index: 2, description: "Tasktwo", completed: false },
    ];

    const task = { index: 3, description: "Taskthree", completed: false };
    const expected = [
      { index: 1, description: "Taskone", completed: false },
      { index: 2, description: "Tasktwo", completed: false },
      { index: 3, description: "Taskthree", completed: false},
    ];
    const result = addTask(arr, "Taskthree");
    expect(result).toEqual(expected);
  });
});
