export default class ProjectList {
  #projectMap;

  constructor() {
    this.#projectMap = new Map();
  }

  add(project) {
    this.#projectMap.set(project.name, project);
  }

  delete(projectName) {
    this.#projectMap.delete(projectName);
  }

  get(key) {
    return this.#projectMap.get(key);
  }

  get projectNames() {
    return this.#projectMap.keys();
  }
}
