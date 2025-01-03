let employee = [
    {
        emp_id : 1,
        emp_name : "Anuj",
        emp_designation:"Developer"
    },
    {
        emp_id : 2,
        emp_name : "Ayush",
        emp_designation:"Developer" 
    }
]

// console.log(employee);

let ob = {
    emp_id : 3,
    emp_name : "Harshit",
    emp_designation:"Developer"
}

// employee.push(ob)
// console.log(employee);

// employee.pop()
// console.log(employee);
// employee.unshift(ob)
// console.log(employee);
// employee.shift()
// console.log(employee);

 employee.splice(1,2,ob)
console.log(employee);






