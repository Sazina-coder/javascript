let display = document.querySelector("#display");
function appendNumber(num){
    display.innerHTML=='0'? display.innerHTML=num : display.innerHTML+=num;
}
function clearScreen(){
    display.innerHTML="0";
}
function deleteNumber(){
    display.innerHTML=display.innerHTML.slice(0,-1);
  
    if(display.textContent==''){
        display.innerHTML='0'
    }

    // display.textContent=" "? display.innerHTML="0" : display.innerHTML=display.innerHTML.slice(0,-1);
}
function calculation(){
    try{
 let result = eval(display.innerHTML);
  display.innerHTML = result;
    }
    catch(er){
        display.innerHTML="Error";
        display.style.color="red"
    }
 

}

document.addEventListener('keydown',(e)=>{
        if(e.key == "1" || e.key=="2"|| e.key=="3"|| e.key=="4"|| e.key=="5"|| e.key=="6"|| e.key=="7"|| e.key=="8"|| e.key=="9"|| e.key=="+"|| e.key=="-"|| e.key=="/"|| e.key=="*+"){
           display.innerHTML=='0'? display.innerHTML=e.key : display.innerHTML+=e.key;
        }
    else if(e.key=="Backspace"){
        deleteNumber();
    }
    else if(e.key=="Delete"){
        clearScreen();
    }
    else if(e.key=="Enter"){
        calculation();
    }
   else{
    display.innerHTML="incorrect";
   }
});


