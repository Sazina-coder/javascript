let input=document.getElementById("todo_input");
let btn=document.getElementById("todo_btn");
let list=document.getElementById("todo_list");
    
btn.addEventListener("click",()=>
    {
   let li=document.createElement("li");
   li.setAttribute('class',"todolist")
     li.textContent=input.value;
     list.appendChild(li);
     let remove=document.createElement("button");
     remove.textContent=("Remove");
     remove.addEventListener("click",()=>li.remove());
     li.appendChild(remove);
     list.appendChild(li);
     input.value="";
})
