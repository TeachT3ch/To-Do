const taskListElement = document.getElementById("task_list");
let taskList = [];


const removeTask = (event) => {
    const targetTaskName = event.target.previousSibling.previousSibling.innerText;

    const newList = taskList.filter(task => task.name == targetTaskName ? false : true);
    taskList = newList;

    redrawTaskList();
}


const redrawTaskList = () => {
    taskListElement.innerHTML = "";

    for (task of taskList) {
        const li = document.createElement("li");
        li.innerHTML = "<span>" + task.name + "</span><span> (" + task.status + ')</span><span class="close">&#x00D7;</span>';

        document.getElementById("task_list").appendChild(li);
    }

    for (let span of document.getElementsByClassName("close")) {
        span.onclick = removeTask;
    }
};


document.getElementById("add").addEventListener("click", () => {
    taskList.push({
        name: document.getElementById('new_task_name').value,
        status: document.getElementById('new_task_status').value
    });

    redrawTaskList();
});
