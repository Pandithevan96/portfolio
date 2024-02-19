
   var boxOverlay=document.querySelector(".container-overlay");
    var box=document.querySelector(".content");
    var addButton = document.getElementById("plus");
    let todos='';
    window.onload=()=>{
        // localStorage.JSON.parse(localStorage.getItem('todos')) || [];
        console.log("iru");
        // todos.push(outer)
        console.log(div);
    }
    addButton.addEventListener("click",function()
    {
        boxOverlay.style.visibility="visible";
        box.style.visibility="visible";

    }
    )
    var cancelButton=document.getElementById("cancel")
    cancelButton.addEventListener("click",function(event){

        event.preventDefault()
        boxOverlay.style.visibility="hidden";
        box.style.visibility="hidden";

    }
    )
var outer=document.querySelector(".outer")
var addContent=document.getElementById("add")
var category=document.getElementById("cname")
var h3=document.getElementById("aname")
var para=document.getElementById("book-desc")

var quoteBox=document.querySelector(".quotebox")
addContent.addEventListener("click",function(event){

 event.preventDefault()
 var div=document.createElement("div")

 div.setAttribute("class","quotebox")
 div.innerHTML=`<h2>${category.value}</h2>
<h3>${h3.value}</h3>
<p>${para.value}</p>
<i class="fa fa-trash fx-2" aria-hidden="true" id="del" onclick="del(event)"></i>`
  outer.append(div)
 localStorage.setItem('todos',JSON.stringify(todos))

  boxOverlay.style.visibility="hidden";
  box.style.visibility="hidden";


}
)
function del(event){
    event.target.parentElement.remove()
}

