let a = parseInt(prompt("Enter the number : "))
let c= 0
for (let i =2;i<=a;i++){
    if(a%i==0){
        c=c+1
    }else{
        c=0
    }
}
if(c==0){
    // alert(a,"number is prime")
    console.log(a,"number is prime");
    
}
else{
    // alert(a,"number is  not prime")
    console.log(a,"number is not prime");
    
}