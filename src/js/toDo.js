const toDoForm = document.getElementById("toDoForm");
const toDoList = document.getElementById("toDo-list");

let todos = [];
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  console.log(li.id);
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function editToDo(e) {
  const span = e.target.previousSibling;
  const li = e.target.parentElement;
  span.innerHTML = `
  <form>
    <input type='text' placeholder="할 일을 입력하세요" />
  </form>
  `;
  const form = span.querySelector("form");

  function handleEditSubmit(e) {
    e.preventDefault();
    const input = form.querySelector("input");
    let editedTodo = todos.filter((todo) => todo.id === parseInt(li.id));
    editedTodo.text = input.value;
    todos = todos.map(todo=> {
      if(todo.id === parseInt(li.id)){
        return {...todo, text: input.value}
      }
      return todo
    })
    saveTodos()
    console.log(editedTodo.text)
    span.innerHTML = editedTodo.text
  }
  form.addEventListener("submit", handleEditSubmit);
}

function createTodoList(newTodoObj) {
  const li = document.createElement("li");
  toDoList.appendChild(li);
  li.id = newTodoObj.id;
  const button = document.createElement("button");
  const editBtn = document.createElement("button");
  const span = document.createElement("span");
  button.innerText = "❌";
  editBtn.innerText = "🖊️";
  span.innerText = newTodoObj.text;
  editBtn.style.top = "30px";
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(button);
  button.addEventListener("click", deleteToDo);
  editBtn.addEventListener("click", editToDo);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const input = toDoForm.querySelector("input");
  const toDoValue = input.value;
  const newTodoObj = {
    text: toDoValue,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  createTodoList(newTodoObj);
  saveTodos();
  input.value = "";
}

toDoForm.addEventListener("submit", handleTodoSubmit);
const savedToDos = localStorage.getItem("todos");

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  todos = parsedToDos;
  parsedToDos.forEach(createTodoList);
}
