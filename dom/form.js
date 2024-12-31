function fun() {
   

    let ob = {
        name:document.querySelector("#name").value,
        contact:document.querySelector("#cont").value,
        email :document.querySelector("#email").value,
        msg :document.querySelector("#msg").value,
        inp : document.querySelector("#inp").value
    }

    console.log(ob);
    return false;
    
}