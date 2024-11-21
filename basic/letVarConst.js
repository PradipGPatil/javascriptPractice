let a=10;

// for const and let if we declared variable and try to redeclare with same it will give error
// let a-10;

// but in case of var it will not give error
var b=11;
var b=11;
console.log(b);
console.log(a);

// main diff between var and let/const scope
// var is function and global scope
// let and const is block scope it mean we declare within curly brase it will accessible in that curly brase


if(true){
var c=12;
}
console.log("value accessing inside if loop "+c);

function varCheck(){
    var d=14;
}
console.log('try to access d from function '+d);

// what will be output for below program

let counter = 0;
for (var i = 1; i <= 10; i++) {
  counter+= i;
}
console.log(counter);
console.log(i);

// out put for i is 11 and counter is 55