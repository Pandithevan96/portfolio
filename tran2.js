var boxOverlay = document.querySelector(".container-overlay");
var box = document.querySelector(".content");
var addButton = document.getElementById("plus");
let todos = [];
let editIndex = -1;

window.onload = () => {
    // Retrieve stored data from localStorage
    todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Create div elements based on the stored data
    if (todos.length !== 0) {
        todos.forEach((todo, index) => {
            var div = document.createElement("div");
            div.setAttribute("class", "quotebox");
            div.innerHTML = `
                <h2>${todo.category}</h2>
                <h3>${todo.h3}</h3>
                <p>${todo.para}</p>
                <i class="fa fa-pencil-alt fx-2 edit-icon" aria-hidden="true" onclick="edit(event, ${index})"></i>
                <i class="fa fa-trash fx-2" aria-hidden="true" onclick="del(event, ${index})"></i>`;
            outer.append(div);
        });
    } else {
        var div = document.createElement("div");
        div.setAttribute("class", "quotebox");
        div.innerHTML = `<h1>No items Added</h1>`;
        outer.append(div);
    }
};

addButton.addEventListener("click", function () {
    boxOverlay.style.visibility = "visible";
    box.style.visibility = "visible";
});

var cancelButton = document.getElementById("cancel");
cancelButton.addEventListener("click", function (event) {
    event.preventDefault();
    clearForm();
    boxOverlay.style.visibility = "hidden";
    box.style.visibility = "hidden";
});

var outer = document.querySelector(".outer");
var addContent = document.getElementById("add");
var category = document.getElementById("cname");
var h3 = document.getElementById("aname");
var para = document.getElementById("book-desc");

addContent.addEventListener("click", function (event) {
    event.preventDefault();

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.remove());

    let isValid = true;

    if (!category.value.trim()) {
        showError(category, 'Name is required');
        isValid = false;
    }

    if (!h3.value.trim()) {
        showError(h3, 'Status Title is required');
        isValid = false;
    }

    if (!para.value.trim()) {
        showError(para, 'Status description is required');
        isValid = false;
    }

    if (!isValid) return;

    var todo = {
        category: category.value,
        h3: h3.value,
        para: para.value
    };

    if (editIndex === -1) {
        todos.push(todo);
    } else {
        todos[editIndex] = todo;
        editIndex = -1;
    }

    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
    clearForm();
    boxOverlay.style.visibility = "hidden";
    box.style.visibility = "hidden";
});

function renderTodos() {
    outer.innerHTML = '';
    todos.forEach((todo, index) => {
        var div = document.createElement("div");
        div.setAttribute("class", "quotebox");
        div.innerHTML = `
            <h2>${todo.category}</h2>
            <h3>${todo.h3}</h3>
            <p>${todo.para}</p>
            <i class="fa fa-pencil-alt fx-2 edit-icon" aria-hidden="true" onclick="edit(event, ${index})"></i>
            <i class="fa fa-trash fx-2" aria-hidden="true" onclick="del(event, ${index})"></i>`;
        outer.append(div);
    });
}

function del(event, index) {
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}

function edit(event, index) {
    editIndex = index;
    var todo = todos[index];
    category.value = todo.category;
    h3.value = todo.h3;
    para.value = todo.para;
    boxOverlay.style.visibility = "visible";
    box.style.visibility = "visible";
}

function clearForm() {
    category.value = '';
    h3.value = '';
    para.value = '';
}

function showError(input, message) {
    const error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.textContent = message;
    input.parentElement.appendChild(error);
}
