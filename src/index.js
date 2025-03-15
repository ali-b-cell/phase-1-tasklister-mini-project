document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form");
  const taskInput = document.querySelector("#new-task-description");
  const taskList = document.querySelector("#tasks");
  const prioritySelect = document.querySelector("#priority");

  taskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText === "") return;

      const taskItem = document.createElement("li");
      taskItem.textContent = taskText + " ";

      const priority = prioritySelect.value;

      if (priority === "high") {
          taskItem.style.color = "red";
      } else if (priority === "medium") {
          taskItem.style.color = "orange";
      } else if (priority === "low") {
          taskItem.style.color = "green";
      }

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "🚮";

      deleteButton.addEventListener("click", () => {
          taskItem.remove();
      });

      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);

      taskInput.value = "";
  });
});


