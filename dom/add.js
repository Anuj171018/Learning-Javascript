let a =0
var c= 0

function add() {
    c=c+1
    document.querySelector("#head").innerHTML = c
}
console.log(c);

function sub(){
    if(c>0){
        c=c-1
        document.querySelector("#head").innerHTML = c
    }
    else{
        document.querySelector("#head").innerHTML = "0"
    }
}console.log(c);    
