let img  = document.getElementById('image')
img.src = "shoe2.jfif"

let h = document.getElementById('head')
h.style.color = "blue"
h.style.fontSize = "80px"
h.style.backgroundColor = "yellow"
h.innerHTML="<i>We are developers</i>"

let head = document.getElementById('head2')
head2.style.cssText = "background-color: red ; color: white; padding: 40px"

head2.textContent = "<i> we are learners</i>"

document.getElementById('para').innerHTML= "paragraph"

let a = document.getElementsByTagName('li')
for (let i = 0;i<9;i++){
    if (i==0){
        a[i].style.backgroundColor = "yellow"
    }
    if(i%2==1){
        a[i+1].style.backgroundColor = "yellow"
    }
}