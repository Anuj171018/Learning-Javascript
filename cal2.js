let num1 = parseInt(prompt("Enter the number 1 : "))
let num2 = parseInt(prompt("Enter the number 2 : "))

let num3 = parseInt(prompt("Enter 1 for add , 2 for multiply,3 for divide,4 for minus"))

switch (num3) {
    case 1:
        num4 = num1 + num2
        console.log(num4);
        break;
    case 2 :
        num4 = num1 * num2
        console.log(num4);
        break;
    case 3:
        num4 = num1 / num2
        console.log(num4);
        break;
    case 4:
        num4 = num1 - num2
        console.log(num4);
        break;


    default:
        console.log("invalid inpute");
        
}
