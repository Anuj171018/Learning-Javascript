let status = true
function fun(){
    let h = document.querySelector("#head")
    let btn = document.querySelector("#btn")
    status = !status 
    if (status) {
        h.innerHTML="cybrom"
        btn.innerHTML="hide"
    }
    else {
        h.innerHTML=""
        btn.innerHTML="Show"
    }

}