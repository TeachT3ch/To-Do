const confirmAdd = () => {
    const taskName = document.getElementById("task_name").value;

    confirm("¿De verdad desea añadir la tarea '" + taskName + "'?");
};
