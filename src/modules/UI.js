import Task from "./Task";
import ToDoList from "./ToDoList";
import Project from "./Project";
import ProjectList from "./ProjectList";

// header
const menuButton = document.querySelector(".burger-btn");
const homeButton = document.querySelector(".home-btn");

// main
const sidebar = document.querySelector(".main-left");
const taskView = document.querySelector(".main-right");
const tasksContainer = document.querySelector(".tasks");
const taskViewTitle = document.querySelector(".current-proj-title");

// add task form
const addTaskButton = document.querySelector(".add-task");
const addTaskFormContainer = document.querySelector(".form-container");
const addTaskForm = document.querySelector(".add-task-form");
const cancelButton = document.querySelector(".cancel-btn");

// default projects and project lists
const inboxProject = new Project("inbox", new ToDoList("inbox"));
const todayProject = new Project("today", new ToDoList("today"));
const thisWeekProject = new Project("this week", new ToDoList("this week"));
const sampleProject = new Project("sample project", new ToDoList("sample"));
const homeProjectList = new ProjectList();
const projectsProjectList = new ProjectList();
homeProjectList.add(inboxProject);
homeProjectList.add(todayProject);
homeProjectList.add(thisWeekProject);
projectsProjectList.add(sampleProject);

const sidebarMap = new Map();
sidebarMap.set("home", homeProjectList);
sidebarMap.set("projects", projectsProjectList);

let currentProjectList = homeProjectList;
let currentProject = inboxProject;

function updateCurrentProject() {
  const currentProjectName = document
    .querySelector(".selected")
    .dataset.projectName.replaceAll("-", " ");
  currentProject = currentProjectList.get(currentProjectName);
}

function updateCurrentProjectList(element) {
  const parentElement = element.closest(".project-list-container");
  const currentProjectListName = parentElement.dataset.projectList;
  currentProjectList = sidebarMap.get(currentProjectListName);
}

function updateTaskView() {
  taskViewTitle.textContent = currentProject.name;
  tasksContainer.replaceChildren();

  const projectTasks = currentProject.toDoList;
  projectTasks.tasks.forEach((task) => {
    tasksContainer.innerHTML += task.taskHTML;
  });

  tasksContainer.appendChild(addTaskButton);
}

// click on sidebar projects
sidebar.addEventListener("click", (e) => {
  const sideLink = e.target.closest(".side-link");
  if (!sideLink) return;

  document.querySelector(".selected").classList.toggle("selected");
  sideLink.classList.toggle("selected");

  updateCurrentProjectList(e.target);
  updateCurrentProject();
  updateTaskView();
});

// add task form
addTaskButton.addEventListener("click", () => {
  addTaskFormContainer.style.display = "block";
});

cancelButton.addEventListener("click", () => {
  addTaskFormContainer.style.display = "none";
});

addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(addTaskForm);
  const title = formData.get("title");
  const description = formData.get("description");
  const date = formData.get("due-date");
  const priority = formData.get("priority");
  const id = `${currentProject.name}-${currentProject.toDoList.length}`;
  const task = new Task(title, description, date, priority, id);
  currentProject.toDoList.addTask(task);
  updateTaskView();
  addTaskFormContainer.style.display = "none";
});
