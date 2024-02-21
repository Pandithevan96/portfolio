var boxOverlay = document.querySelector(".container-overlay");
var box = document.querySelector(".content");
var addButton = document.getElementById("plus");
let todos = [];

window.onload = () => {
    // Retrieve stored data from localStorage
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    console.log("iru");
    console.log(todos);

    // Create div elements based on the stored data
    todos.forEach(todo => {
        var div = document.createElement("div");
        div.setAttribute("class", "quotebox");
        div.innerHTML = `<h2>${todo.category}</h2>
                         <h3>${todo.h3}</h3>
                         <p>${todo.para}</p>
                         <i class="fa fa-trash fx-2" aria-hidden="true" id="del" onclick="del(event)"></i>`;
        outer.append(div);
    });
}

addButton.addEventListener("click", function () {
    boxOverlay.style.visibility = "visible";
    box.style.visibility = "visible";
})

var cancelButton = document.getElementById("cancel")
cancelButton.addEventListener("click", function (event) {
    event.preventDefault()
    boxOverlay.style.visibility = "hidden";
    box.style.visibility = "hidden";
})

var outer = document.querySelector(".outer")
var addContent = document.getElementById("add")
var category = document.getElementById("cname")
var h3 = document.getElementById("aname")
var para = document.getElementById("book-desc")

var quoteBox = document.querySelector(".quotebox")
addContent.addEventListener("click", function (event) {
    event.preventDefault();

    // Create an object with the necessary data
    var todo = {
        category: category.value,
        h3: h3.value,
        para: para.value
    };

    todos.push(todo); // Add the new todo to the todos array

    // Update the localStorage with the updated todos array
    localStorage.setItem('todos', JSON.stringify(todos));

    // Create a new div element based on the added todo
    var div = document.createElement("div");
    div.setAttribute("class", "quotebox");
    div.innerHTML = `<h2>${todo.category}</h2>
                    <h3>${todo.h3}</h3>
                    <p>${todo.para}</p>
                    <i class="fa fa-trash fx-2" aria-hidden="true" id="del" onclick="del(event)"></i>`;
    outer.append(div);

    boxOverlay.style.visibility = "hidden";
    box.style.visibility = "hidden";
})

function del(event) {
    // Remove the div element from the DOM
    event.target.parentElement.remove();

    // Find the corresponding todo in the todos array and remove it
    var index = Array.from(outer.children).indexOf(event.target.parentElement);
    todos.splice(index, 1);

    // Update the localStorage with the updated todos array
    localStorage.setItem('todos', JSON.stringify(todos));
}
