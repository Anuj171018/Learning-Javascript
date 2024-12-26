let st
function start() {
    let head = document.querySelector("#head")
    let num = 0
    st = setInterval(()=>{head.innerHTML=num++},1000)
}

function stop(){
    clearInterval(st)
}

setTimeout(()=>alert("Set time out"),2000)