function fun1() {
    let img = document.getElementById("chimg")
    img.src = "shoe1.jfif"
}
function fun2() {
    let img = document.getElementById("chimg")
    img.src = "shoe2.jfif"
}

function demofun() {
    let he1 = document.querySelector("#head")
    he1.classList.add("he1")
}
function demofun1() {
    let he1 = document.querySelector("#head")
    he1.classList.remove("he1")
}
function btnone() {
    let he1 = document.querySelector("#head")
    he1.classList.toggle("he1")
}

function theme() {
    let bd = document.body
    bd.classList.toggle("theme")    
}