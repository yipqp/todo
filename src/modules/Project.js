export default class Project {
  #toDoList;

  #name;

  constructor(name, toDoList) {
    this.#name = name;
    this.#toDoList = toDoList;
  }

  get toDoList() {
    return this.#toDoList;
  }

  set toDoList(newTaskList) {
    this.#toDoList = newTaskList;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }
}
