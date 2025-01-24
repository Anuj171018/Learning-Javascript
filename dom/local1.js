let person = {
    name : "Anuj",
    email : "anuj@gmail.com",
    password : "1234"
}

localStorage.setItem("userdata",JSON.stringify(person))

let data=JSON.parse(localStorage.getItem("userdata"))
console.log(data);
console.log(data.name);
