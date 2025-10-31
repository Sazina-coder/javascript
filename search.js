let students = [
  { name: "Saz", grade: "A", age: 10, email:"Saz@gmail.com"},
  { name: "Ash", grade: "B", age: 20, email:"Ash@gmail.com"},
  { name: "krips", grade: "A", age: 19, email:"krips@gmail.com"},
  { name: "Adi", grade: "C", age: 22, email:"Adi@gmail.com"},
  { name: "dhasa", grade: "B", age: 20, email:"dhasa@gmail.com"},
];
 let search = document.getElementById("searchbar");
let result = document.getElementById("lists");
 function search_btn(){
  if(search.value=="")
   let keywords=document.getElementById("searchbar").value;
   lists.innerHTML
   let search=students.filter(function (obj) {
    return(
      obj.name.toLowerCase().includes(keywords)||
      obj.grade.toLocaleLowerCase().includes(keywords)||
      obj.email.toLocaleLowerCase().includes(keywords)      
    );
   });
     result.innerHTML="";
     const content=search.map((obj)=>{
      let div=document.createElement("div");
      div.innerHTML=`${obj.name},${obj.grade},${obj.email}`;
      result.append(div);
     }
    )
   }
