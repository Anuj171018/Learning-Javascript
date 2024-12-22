function a() {
    let name = document.querySelector("#name").value
    let cont = document.querySelector("#cont").value
    let msg = document.querySelector("#msg").value
        if(name == ""){
            alert("Enter the name")
            document.querySelector("#name").focus()
            return false
        }
        if(cont == ""){
            alert("Enter the cont")
            document.querySelector("#cont").focus()
        }
        if(msg == ""){
            alert("Enter the msg")
            document.querySelector("#msg").focus()
        }


    return false
}