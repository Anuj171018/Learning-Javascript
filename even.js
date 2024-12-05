let num1 = parseInt(prompt("Enter the number"))

if (num1%2==0){
    let num2 = parseInt(prompt("Enter the radius"))
    let num3 = 3.14 * num2*num2
    console.log("area of circle is ", num3);
}
else {
    let num4 = num1*num1*num1
    console.log("Cube of number is ", num4);
    
}