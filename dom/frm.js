const data = ()=>{
    let userdata={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#pass").value
    }
    localStorage.setItem("userdata",JSON.stringify(userdata))
}