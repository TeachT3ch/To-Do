var close = document.getElementsByClassName("close");

class Task {
  constructor(test, date) {
    this.text = test;
    this.date = date;
  }

  render() {
    var li = document.createElement("li");
    var t = document.createTextNode(this.text);
    li.appendChild(t);
    document.getElementById("taskList").appendChild(li);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

var tasks = [new Task("Preparar la comida", ""),
 new Task("Hacer los ejercicios de Teach[Tech]", ""),
  new Task("Tirar el anillo único al monte del destino", "")]

tasks.forEach(task => task.render());

function addTask() {
  const inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    const newTask = new Task(inputValue, "loqsa");
    newTask.render();
    document.getElementById("myInput").value = "";
  }
}