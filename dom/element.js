let head_element = document.createElement("h1")
head_element.textContent = "This is js class "

let bd = document.body
bd.append(head_element)

let head1 = document.createElement("h2")
head1.textContent = "Second element from js"
bd.append(head1)

head_element.setAttribute("style","color : red")
head1.setAttribute("style","color : blue")
bd.setAttribute("bgcolor","yellow")

bd.removeAttribute("bgcolor")

let img = document.getElementById("image")
img.setAttribute("src","p1.png")