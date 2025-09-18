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



//PRACTICE - 2
// OPERATERS

//ARRITHMENTIC
var a = 10
var b = 20
console.log("ADD :" , a + b)

console.log("SUB :" , a - b)   //+10-20 = -10

console.log("MUL:" , a * b) 

console.log("DIV :" , a / b)   //QUOTIENT

console.log("MOD :" , a % b)   //REMINDER

console.log("ROOT :" , a ** b )    //ROOT




//ASSINGMENT

var a = 100
var b = 10

a += b    // a = 100 + 10 => 110
console.log(a)

a -= b    //a = 110 - 10 => 100
console.log(a)

a *= b     // a = 100 * 10 => 1000
console.log(a)

a /= b       // a = 1000 / 10 => 100 
console.log(a)

a **= b       // a = 100 / 10 => 100000000000000000000
console.log(a)



//COMPARISON

var a = "wer"
var b = 'wer'
console.log(  a == b )   //Only checking value

console.log(  a === b  )   //Stritcly checking value


var a = 123
var b = 321
console.log( a < b )

console.log( a > b )

var a = 100
var b = 100

console.log( a >= b )
console.log( a <= b )

var a = 10
var b = '10'
console.log(!a)
console.log( a != b )
console.log( a !== b )


console.log("---LOGICAL---")


//LOGICAL

// &&-AND   , ||-OR   ,  !-NOT

let age = 18
if(age == '18'  &&  age < 18)
{
    console.log('Outstanding')
}
else{
    console.log("Poor Perfomance")
}


if(age == '18'  ||  age < 18)
{
    console.log('Outstanding')
}
else{
    console.log("Poor Perfomance")
}



//UNARY
//POST INCREMENT / DECREMENT

var a = 100
console.log( a++ )
console.log( a )
console.log( a )
console.log( a-- , a )


//PRE INCREMENT / DECREMENT

var b = 200
console.log( ++b , b )

console.log( --b , b )




//TERNARY / CONDITIONAL OPERATER => ?
age = 18
if(age < 23){
    console.log("Eligible")
}
else{
    console.log("Not Elegible")
}


age = (age < 23)? true : false
console.log(age)

