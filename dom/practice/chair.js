let total1 
let total2 
function fun1() {
    total1=total1+350
    let a= document.querySelector("#a")
    a.classList.toggle("first")
}
function fun2() {
    total2=total2+250
    let b= document.querySelector("#b")
    b.classList.toggle("second")
}
function fun3() {
    total2=total2+250
    let c= document.querySelector("#c")
    c.classList.toggle("second")
}
function fun4() {
    total1=total1+350
    let d= document.querySelector("#d")
    d.classList.toggle("first")
}
function fun5() {
    total1=total1+350
    let e= document.querySelector("#e")
    e.classList.toggle("first")
}
function fun6() {
    total2=total2+250
    let f= document.querySelector("#f")
    f.classList.toggle("second")
}
function fun7() {
    total2=total2+250
    let g= document.querySelector("#g")
    g.classList.toggle("second")
}
function fun8() {
    total1=total1+350
    let h= document.querySelector("#h")
    h.classList.toggle("first")
}
document.querySelector("#total").innerHTML = total1+total2