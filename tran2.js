
   var boxOverlay=document.querySelector(".container-overlay");
    var box=document.querySelector(".content");
    var addButton = document.getElementById("plus")
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
<button id="del" onclick="del(event)">Delete</button>`
  outer.append(div)
  boxOverlay.style.visibility="hidden";
  box.style.visibility="hidden";


}
)
function del(event){
    event.target.parentElement.remove()
}

