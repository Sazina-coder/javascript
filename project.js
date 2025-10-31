let todo=[]
let btn_todo=document.getElementById("add_btn");
let todo_inp=document.getElementById("todo_input");
 btn_todo.addEventListener("click",todo_add)
    function todo_add()
    {
        let inputtext=todo_inp.value
        todo.push(inputtext);
        todo_inp.value=0;
        console.log(todo);
        
    }





