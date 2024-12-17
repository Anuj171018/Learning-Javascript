let a =0
let b = 0
let c= 0

function add() {
    c=c+1
    document.querySelector("#head").innerHTML = c
}
function sub(){
    if(c>=0){
        b=c-1
        document.querySelector("#head").innerHTML = b
    }
    else{
        document.querySelector("#head").innerHTML = "0"
    }
}