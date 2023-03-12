export default class ToDoList {
  #taskList = [];

  #name;

  constructor(name) {
    this.#name = name;
  }

  addTask(task) {
    this.#taskList.push(task);
  }

  removeTask(task) {
    this.#taskList.pop(task);
  }

  get tasks() {
    return this.#taskList;
  }

  get length() {
    return this.#taskList.length;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }
}
