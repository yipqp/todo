export default class Task {
  #done = false;

  #title;

  #description;

  #date;

  #priority;

  #id;

  constructor(title, description, date, priority, id) {
    this.#title = title;
    this.#description = description;
    this.#date = date;
    this.#priority = priority;
    this.#id = id;
  }

  get title() {
    return this.#title;
  }

  set title(newTitle) {
    this.#title = newTitle;
  }

  get description() {
    return this.#description;
  }

  set description(newDesc) {
    this.#description = newDesc;
  }

  get date() {
    return this.#date;
  }

  set date(newDate) {
    this.#date = newDate;
  }

  get priority() {
    return this.#priority;
  }

  set priority(newPrio) {
    this.#priority = newPrio;
  }

  get id() {
    return this.#id;
  }

  set id(newId) {
    this.#id = newId;
  }

  get taskHTML() {
    return `<div class="task">
            <div class="check-container">
              <input type="checkbox" name="checked" id="${this.id}" />
              <label for="${this.id}"></label>
            </div>
            <div class="task-right">
              <p class="task-title">${this.title}</p>
              <p class="task-desc">${this.description}</p>
              <p class="due-date">${this.date}</p>
              <button class="edit-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>edit</title>
                  <path
                    d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                  />
                </svg>
              </button>
            </div>
          </div>`;
  }
}
