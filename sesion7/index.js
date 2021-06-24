// Función que recupera la lista de tareas de localStorage o devuelve una vacía si no existe
const getTaskList = () => {
    return JSON.parse(localStorage.getItem("taskList")) || [];
}


// Función que sobreescribe la lista de tareas de localStorage con una nueva lista
const setTaskList = (taskList) => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
}


// Función que recibe el evento de eliminar tarea, la elimina de la lista y redibuja
const removeTask = (event) => {
    const targetTaskName = event.target.previousSibling.previousSibling.innerText;

    let taskList = getTaskList();

    const newList = taskList.filter(task => task.name == targetTaskName ? false : true);
    taskList = newList;

    setTaskList(taskList);

    redrawTaskList();
}


// Función que redibuja la lista de tareas
const redrawTaskList = () => {
    taskList = getTaskList();

    const taskListElement = document.getElementById("task_list");
    taskListElement.innerHTML = "";

    for (task of taskList) {
        const tr = document.createElement("tr");
        tr.innerHTML = "<td>" + task.name + "</td><td>" + task.status + '</td><td class="close">&#x00D7;</td>';

        document.getElementById("task_list").appendChild(tr);
    }

    for (let span of document.getElementsByClassName("close")) {
        span.onclick = removeTask;
    }
};


// Asignación del evento de añadir una tarea a una función que la añade a la lista y la redibuja
document.getElementById("add").addEventListener("click", () => {
    let taskList = getTaskList();

    taskList.push({
        name: document.getElementById('new_task_name').value,
        status: document.getElementById('new_task_status').value
    });

    setTaskList(taskList);

    redrawTaskList();
});


// Función que ordena alfabéticamente una lista en función de los valores de una columna (clave) concreta
const sortArray = (array, column) => {
    array.sort((a, b) => {
        let columnA = a[column].toUpperCase();  // Ignorar mayúsculas / minúsculas
        let columnB = b[column].toUpperCase();  // Ignorar mayúsculas / minúsculas
        if (columnA < columnB) {
          return -1;
        }
        if (columnA > columnB) {
          return 1;
        }

        // Los nombres son iguales
        return 0;
      });
};


// Asignación del evento de ordenar una tarea por nombre a la función de ordenación
document.getElementById("name_header").addEventListener("click", () => {
    let taskList = getTaskList();

    sortArray(taskList, "name");

    setTaskList(taskList);

    redrawTaskList();
});


// Asignación del evento de ordenar una tarea por estado a la función de ordenación
document.getElementById("status_header").addEventListener("click", () => {
    let taskList = getTaskList();

    sortArray(taskList, "status");

    setTaskList(taskList);

    redrawTaskList();
});


// Inicializar la lista al arrancar
redrawTaskList();
