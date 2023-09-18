var add_btn = document.getElementById("add-btn");
add_btn.addEventListener("click", function () {
  console.log("j");
  newElement();
});

closeBtns();
editBtns();

// Create a new list item when clicking on the "Add" button
function newElement() {
  var inputValue = document.getElementById("input-task").value;

  var task = taskElement(inputValue);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("task-list").appendChild(task);
  }

  document.getElementById("input-task").value = "";

  closeBtns();
  editBtns();
}

function closeBtns() {
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement.parentElement;
      div.style.display = "none";
    };
  }
}

function editBtns() {
  var edit = document.getElementsByClassName("edit");
  var e;
  for (e = 0; e < edit.length; e++) {
    edit[e].onclick = function () {
      var div = this.parentElement.parentElement;
      console.log(div);
      //   console.log(this.parentElement.childNodes[0].nodeValue);
      //   div.style.display = "none";
      var currentValue =
        this.parentElement.parentElement.childNodes[0].nodeValue;
      div.replaceWith(inputBox(currentValue));

      //   console.log(edit_value);
      var edit_submit = document.getElementById("edit_submit");
      edit_submit.addEventListener("click", function () {
        var edit_value = document.getElementById("edit_input").value;
        console.log(edit_value);
        div = this.parentElement;
        div.replaceWith(taskElement(edit_value));
        closeBtns();
        editBtns();
      });
    };
  }
}

function inputBox(value) {
  var container = document.createElement("DIV");
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("value", value);
  input.id = "edit_input";
  var submit = document.createElement("button");
  submit.appendChild(document.createTextNode("Add Task"));
  submit.id = "edit_submit";
  container.appendChild(input);
  container.appendChild(submit);
  return container;
}

function taskElement(value) {
  var task = document.createElement("div");
  task.className = "task";
  var t = document.createTextNode(value);
  task.appendChild(t);

  var task_buttons = document.createElement("DIV");
  task_buttons.className = "editdel";

  var edit_div = document.createElement("DIV");
  var edit_txt = document.createTextNode(" edit ");

  //   edit_div.cltask_buttonsassName = "edit";
  edit_div.className = "edit";

  edit_div.appendChild(edit_txt);
  task_buttons.appendChild(edit_div);

  var del_div = document.createElement("DIV");
  var del_txt = document.createTextNode(" del ");

  del_div.className = "close";
  del_div.appendChild(del_txt);
  task_buttons.appendChild(del_div);

  task.appendChild(task_buttons);

  return task;
}
