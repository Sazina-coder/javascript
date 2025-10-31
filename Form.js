let fname=document.getElementById("name");
let  number=document.getElementById("numb");
let  Email=document.getElementById("mail");
let  pass=document.getElementById("password");
let button=document.getElementById("btn");
let name_error=document.getElementById("nameerror");
let numb_error=document.getElementById("numbererror");
let mail_error=document.getElementById("mailerror");
let pass_error=document.getElementById("passerror");

 button.addEventListener("click",()=>{
    if (fname.value==="")
    {
        name_error.textContent="Empty_name"
    }
     if (number.value==="")
    {
         numb_error.textContent="Empty_numb"
    }
     if (Email.value==="")
    {
         mail_error.textContent="Empty_mail"
    }
     if (pass.value==="")
    {
        pass_error.textContent="Empty_pass"
    }
 })
