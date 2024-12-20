function add() {
    let num1 = parseInt(document.querySelector("#num1").value)
    let num2 = parseInt(document.querySelector("#num1").value)
    let num3 = num1 + num2
    document.querySelector("#head").innerHTML=num3

    return false
}