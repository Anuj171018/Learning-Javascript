let student = [
    {
        roll:1,
        name:"Anuj",
        age:25,
        city:"Rajgarh"
    },
    {
        roll:2,
        name:"Ayush",
        age:25,
        city:"Rajgarh"
    },
    {
        roll:3,
        name:"Amisha",
        age:24,
        city:"Bhopal"
    },
    {
        roll:4,
        name:"Harshit",
        age:24,
        city:"Jabalpur"
    },
    {
        roll:5,
        name:"Himanshu",
        age:23,
        city:"Shivpuri"
    }
]

let finaldata = student.map((e)=>`
<tr>
    <td>${e.roll}</td>
    <td>${e.name}</td>
    <td>${e.age}</td>
    <td>${e.city}</td>
</tr>
`).join("")

 document.getElementById('displaydata').innerHTML = finaldata

