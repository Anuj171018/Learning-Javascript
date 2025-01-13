

function fun1(){
    let ip1=document.querySelector("#ip1").value
    let ip2=document.querySelector("#ip2").value
    let ip3=document.querySelector("#ip3").value
    let ip4=document.querySelector("#ip4").value
    let ip5=document.querySelector("#ip5").value

    let arr = [ip1,ip2,ip3,ip4,ip5]

    for(let i= 0;i<5;i++){
        let n =arr[i]
        for (let j =1;j<=n;j++){
            if(n%j==0){
                console.log(j);
                
            }
            
            
        }
        console.log("=======================================================================");
    }
}