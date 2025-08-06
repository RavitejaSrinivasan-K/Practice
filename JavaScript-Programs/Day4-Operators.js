//OPERATORS
//ARRITHMETIC
var a = 20
var b = 10
console.log("ADD :" , a+b)
console.log("SUB :" , a-b)
console.log("MUL :" , a*b)
console.log("DIV :" , a/b)  //QUOTIENT
console.log("MOD :" , a % b) //REMINDER
console.log("ROOT :" , a ** b)


//ASSINGMENT
var a = 6;
var b = 4;
console.log(a += b)  //a = a + b
console.log(a -= b) 
console.log(a *= b) 
console.log(a /= b) 
console.log(a %= b)  
console.log(a**b)

//COMPARISON
var a = 10
var b = 20
console.log(a == b)

var a = 10
var b = "10"
console.log(a === b)

var a = 10
var b = 20
console.log(a != b)

var a = 10
var b = "10"
console.log(a !== b)

var a = 10
var b = "10"
console.log(a < b)

var a = 10
var b = "10"
console.log(a <= b)

var a = 10
var b = "10"
console.log(a > b)

var a = 10
var b = "10"
console.log(a >= b)


//LOGICAL - &&  ||
let money = 500
if(money <= 200 && money === 500)
{
    console.log("Eligible")
}
else{
    console.log("Not eligible")
}


if(money <= 200 || money === 500)
{
    console.log("Eligible")
}
else{
    console.log("Not eligible")
}



//UNARY
//POST increment / decrement
var a = 100
console.log(a++ , a , a)
console.log(a-- , a)

//PRE increment / decrement
var b = 200
console.log(++b)
console.log(--b)



//TERNARY ? 

let age = 20
let x = (age<=23) ? true : false
console.log(x)

x = age == '20' ? "Eligible" : "Not Eligible"
console.log(x)


var a = 0
var b = 20
console.log(a^b)
