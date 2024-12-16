function fun() {
    alert("this is click ")
}

function add() {
    let a = parseInt(prompt("Enter the number : "))
    let b = parseInt(prompt("Enter the number : "))

    document.querySelector("#sum").innerHTML = a+b
}
function sub() {
    let a = parseInt(prompt("Enter the number : "))
    let b = parseInt(prompt("Enter the number : "))

    document.querySelector("#sum").innerHTML = a-b
}
function mul() {
    let a = parseInt(prompt("Enter the number : "))
    let b = parseInt(prompt("Enter the number : "))

    document.querySelector("#sum").innerHTML = a*b
}
function div() {
    let a = parseInt(prompt("Enter the number : "))
    let b = parseInt(prompt("Enter the number : "))

    document.querySelector("#sum").innerHTML = a/b
}

function red() {
    // let h = document.querySelector("#bd")
    let h = document.body
    h.style.backgroundColor = "red"
}
function blue() {
    let h = document.querySelector("#bd")
    h.style.backgroundColor = "blue"
}
function yellow() {
    let h = document.querySelector("#bd")
    h.style.backgroundColor = "yellow"
}
function aqua() {
    let h = document.querySelector("#bd")
    h.style.backgroundColor = "aqua"
}
function green() {
    let h = document.querySelector("#bd")
    h.style.backgroundColor = "green"
}

function red1 (c){
    document.body.style.backgroundColor = c
}