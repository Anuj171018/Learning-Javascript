function validate() {
    let name = document.querySelector("#name").value
    let age = document.querySelector("#age").value
    let contact = document.querySelector("#contact").value
    let email = document.querySelector("#email").value

    if(name == ""){
        alert("please enter your name")
        document.querySelector("#name").focus()
        return false
    }
    else if(age == ""){
        alert("please enter your age")
        document.querySelector("#age").focus()
        return false
    }
    else if(isNaN(age)){
        alert("please enter your age in number")
        document.querySelector("#age").focus()
        return false
    }
    else if(isNaN(contact)){
        alert("please enter your contact in number")
        document.querySelector("#contact").focus()
        return false
    }
    else if(contact.length !=10){
        alert("please enter your contact in 10 digit")
        document.querySelector("#contact").focus()
        return false
    }
    else if(email == ""){
        alert("please enter your email")
        document.querySelector("#email").focus()
        return false
    }
    else if(!(email.includes("@"))){
        alert("email should have @")
        document.querySelector("#email").focus()
        return false
    }
    
    
}