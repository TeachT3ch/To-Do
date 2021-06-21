const taskListElement = document.getElementById("task_list");
const taskList = [];


const redrawTaskList = () => {
    taskListElement.innerHTML = "";

    for (task of taskList) {
        const li = document.createElement("li");
        const taskNameNode = document.createTextNode(task);
        const span = document.createElement("span");
        span.className = "close";
        const cross = document.createTextNode("\u00D7");
        span.appendChild(cross);
        li.appendChild(taskNameNode);
        li.appendChild(span);

        document.getElementById("task_list").appendChild(li);
    }
};


const addTask = (taskName) => {
    taskList.push(taskName);

    redrawTaskList()
}
