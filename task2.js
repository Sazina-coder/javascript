let printitem=[
    {name:"noodles",price:50, quantity:5},
    {name:"chips",price:80, quantity:10},
    {name:"coke",price:150, quantity:8},
];
function checkitem(name,quan){
    switch(name){
        case "noodles":
            if(quan>printitem[0].quantity){
                console.log("Insufficient");
            }
            
            else{
                console.log(printitem[0].price* quan)
            }
            break;
        case "chips" :
                        if(quan>=printitem[1].quantity){
                console.log("Insufficient");
            }
            else{
                console.log(printitem[1].price* quan)
            }
            break;
            case "coke" :
                        if(quan>printitem[2].quantity){
                console.log("Insufficient");
            }
            else{
                console.log(printitem[2].price* quan)
            }
            break;
    }
     return 0;  



}
checkitem("chips",10);

