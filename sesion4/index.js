const confirmAdd = () => {
    const taskName = document.getElementById("task_name").value;

    if (confirm("¿De verdad desea añadir la tarea '" + taskName + "'?")) {
        addTask(taskName);
    }
};

const addTask = (taskName) => {
    const li = document.createElement("li");
    const taskNameNode = document.createTextNode(taskName);
    const span = document.createElement("span");
    span.className = "close";
    const cross = document.createTextNode("\u00D7");
    span.appendChild(cross);
    li.appendChild(taskNameNode);
    li.appendChild(span);

    document.getElementById("task_list").appendChild(li);
};
