function data(){
let abc = {
    name:document.querySelector("#name").value,
    email:document.querySelector("#email").value,
    password:document.querySelector("#pass").value
}
localStorage.setItem("userdata",JSON.stringify(abc))

}
let udata=JSON.parse(localStorage.getItem("userdata"))

function log() {
    let email=document.querySelector("#email").value
    let pass=document.querySelector("#pass").value

    console.log(udata.email);
    
    if(email!=udata.email){
        document.querySelector("#email").focus()
        alert("you have entered wrong email")
    return false
    }
    if(pass!=udata.password){
        document.querySelector("#pass").focus()
        alert("you have entered wrong password")
    return false
    }
    }