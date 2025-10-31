let students=[
    {name:"Sazina" , percentage:98},
    {name:"Sazinaa" , percentage:98},
    {name:"Sazinaaa" , percentage:98},
    {name:"hero" , percentage:50},
]
function marks(n){
    // console.log(n);
    let grade="";
    for(let i=0; i<=students.length; i++){
        // console.log(students[i].name);
        if (students[i].name===n)
            {
            if (students[i].percentage>=90)
            {
                grade="A+"
                return grade;
            }
            else if (students[i].percentage>=80)
            {
                grade="A"
                return grade;
            }

              else if (students[i].percentage>=70)
            {
                grade="B+"
                return grade;
            }
             else if (students[i].percentage<60)
            {
                grade="NG"
                return grade;
            }
     

        }
               else {  
        grade = "person not found"
            }

    }
}
let result = marks("hero");