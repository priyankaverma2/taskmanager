const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() === "") {
        return;
    }

    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const textElement = document.createElement("span");
    textElement.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(textElement);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value = "";
}

taskList.addEventListener("change", (event) => {
    const listItem = event.target.parentNode;
    const spanElement = listItem.querySelector("span");
    if (event.target.checked){
    
        spanElement.classList.add("completed");
        console.log(spanElement.classList)
    } else {
        spanElement.classList.remove("completed");
        console.log(spanElement.classList)
    }
});
