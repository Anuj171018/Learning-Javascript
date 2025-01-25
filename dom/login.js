function log() {
let email=document.querySelector("#email").value
let pass=document.querySelector("#pass").value
// localStorage.setItem("userdata",JSON.stringify(data))
let userdata=JSON.parse(localStorage.getItem(data))

if(email!=userdata.email){
    document.querySelector("#email").focus()
    alert("you have entered wrong email")
return false
}
if(pass!=userdata.pass){
    document.querySelector("#pass").focus()
    alert("you have entered wrong password")
return false
}
}