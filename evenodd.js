let n1 = parseInt(prompt("Enter the number : "))

if(n1%2==0){
    let a = 1
    while(a<=10){
        console.log(n1+"*"+a+"="+n1*a);
        a++        
    }
    
}
else {
    let a =10
    while(a>=1){
        console.log(a);
        a--
        
    }
}