
let employees = [
    {name:"Saz", role:"Admin", salary:40000},
    {name:"Ash", role:"Developer", salary:30000},
    {name:"krips", role:"Designer", salary:20000}
];

function displayEmployees(list) {
    const showing = document.getElementById("showing");
    showing.innerHTML = ""; 
    list.forEach(emp => {
        let div = document.createElement("div");
        div.innerHTML = `<strong>${emp.name}</strong> 
         Role: ${emp.role} 
          Salary: ${emp.salary}`;
        showing.appendChild(div);
    });
}

function addEmployee() {
    const empName = document.getElementById("emp_name").value.trim();
    const empRole = document.getElementById("emp_role").value.trim();
    const empSalary = document.getElementById("emp_salary").value.trim();

    if(empName && empRole && empSalary) {
        employees.push({name: empName, role: empRole, salary: empSalary});
        document.getElementById("emp_name").value = "";
        document.getElementById("emp_role").value = "";
        document.getElementById("emp_salary").value = "";
        document.getElementById("message").innerHTML = "";
        displayEmployees(employees);
    } else {
        document.getElementById("message").innerHTML = "Please 🙏 fill 📝 the Form 🗒️ first 🙄";
    }
}

document.getElementById("search").addEventListener("input", function() {
    const keyword = this.value.toLowerCase();
    const filtered = employees.filter(emp =>
        emp.name.toLowerCase().includes(keyword) ||
        emp.role.toLowerCase().includes(keyword) ||
        emp.salary.toString().includes(keyword)
    );
    displayEmployees(filtered);
});

displayEmployees(employees);

