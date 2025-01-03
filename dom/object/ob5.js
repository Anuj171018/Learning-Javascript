// let ob1 = {
//     name:"Anuj",
//     age:55
// }
// let ob2 = {
//     contact:123
// }
// let ob3={...ob1,...ob2}
// console.log(ob3);


let ob = {
    name:"Anuj",
    age:55,
    stack:"fsd",
    location:"Cybrom"
}

let val = Object.values(ob)
console.log(val);

let k = Object.keys(ob)
console.log(k);

delete ob.age                           
console.log(ob);



