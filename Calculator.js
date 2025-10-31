
function add(){
    let subject_div=document.getElementById("sub_container");
    let new_div=document.createElement("div");
    new_div.classList.add("inp");
    let sub_inp=document.createElement("sub_section");
    let mark_inp=document.createElement("mark_section");
    sub_inp.setAttribut("class","sub_name");
    sub_inp.setAttribute("type","text");
    sub_inp.setAttribute("placeholder","Subject Name")
    mark_inp.setAttribut("class","marks");
    mark_inp.setAttribute("type","number");
    mark_inp.setAttribute("placeholder","Marks(0-100)");
    marks_inp.setAttribut("min","0");
    mark_inp.setAttribute("max","100");
    new_div.appendChild("sub_inp");
    new_div.appendChild("mark_inp");
     subject_div.appendChild(new_div);
}

