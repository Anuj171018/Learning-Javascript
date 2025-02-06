async function fetdata(){
    let data = await fetch("http://localhost:3000/Student")
    let res = await data.json()
    let tdata = res.map((e)=>`
    <tr>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.age}</td>
    <td>${e.contact}</td>
    <td>${e.city}</td>
    <td><button onclick="mydelete('${e.id}')">Delete</button></td>
    </tr>
    `).join("")

    document.querySelector("#displaydata").innerHTML=tdata
    
}

fetdata()

function mydelete(id){
    fetch(`http://localhost:3000/Student/${id}`,{
        method:"DELETE"
    })
    .then(res=>alert("delete.......!"))
    location.reload()
}

function savedata(){
    let frmdata = {
        name:document.querySelector("#name").value,
        age:document.querySelector("#age").value,
        contact:document.querySelector("#contact").value,
        city:document.querySelector("#city").value
    }


    fetch("http://localhost:3000/Student",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(frmdata)
    })
    .then(r=>alert("Data inserted successfully.....!"))
}