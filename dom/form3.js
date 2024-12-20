function con() {
    let c = parseInt(document.querySelector("#cont").value)
    let cod = 0
    let b = c
    while (b>0) {
        cod=cod+1
        b= parseInt (b/10)   
    }
    if (cod==10) {
        alert("you have enter the right number")
        return false
    }
    else{
        alert("you have enter wrong number")
        document.querySelector("#cont").focus()
        return false
    }
    
}