"use strict";

const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  createTask(taskText);

  taskInput.value = "";
});

function createTask(text) {
  const li = document.createElement("li");

  const taskContent = document.createElement("div");
  taskContent.classList.add("task-content");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = text;

  checkbox.addEventListener("change", function () {
    span.classList.toggle("done");
  });

  taskContent.appendChild(checkbox);
  taskContent.appendChild(span);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  
  deleteButton.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" 
       viewBox="0 0 24 24" 
       width="20" 
       height="20" 
       fill="none" 
       stroke="currentColor" 
       stroke-width="2" 
       stroke-linecap="round" 
       stroke-linejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6l-1 14H6L5 6"></path>
    <path d="M10 11v6"></path>
    <path d="M14 11v6"></path>
    <path d="M9 6V4h6v2"></path>
  </svg>
  `;
  
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  li.appendChild(taskContent);
  li.appendChild(deleteButton);

  taskList.appendChild(li);
}