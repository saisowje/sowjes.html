// variables - 1) var 2)let 3) const
// var - functional scope
// let - block scope
// const - fixed (no change)

var name="ABC"
console.log(name);
console.log(typeof name);



let age = 25

age = 26
console.log(age);

const place="HYD"
console.log(place);

let name1= false
console.log(name1);
console.log(typeof name1);

if(10>20){
    console.log(10)
}
else{
    console.log(2);
}

if(10>20){
    console.log(10);
}
else if(20>200){
    console.log(20);
} 
else{
    console.log(2);
}