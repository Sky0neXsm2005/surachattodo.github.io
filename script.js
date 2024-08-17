function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span>${taskText}</span>
            <div class="buttons">
                <button class="complete" onclick="completeTask(this)">Complete</button>
                <button class="delete" onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function completeTask(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle('completed');
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}