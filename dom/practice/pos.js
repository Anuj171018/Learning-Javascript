function p() {
    let n = parseInt(document.querySelector("#num").value)
    if (n>0) {
        document.querySelector("#head").innerHTML = "number is positive"
    }
    else if (n<0) {
        document.querySelector("#head").innerHTML = "number is negative"
    }
    else{
        document.querySelector("#head").innerHTML = "number is 0"
    }
    return false
}