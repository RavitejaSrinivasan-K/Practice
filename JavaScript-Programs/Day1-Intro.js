//SINGLE COMMENT LINE
/*
MULTIPLE
COMMENT
LINES
*/

//1. FIXED VALUES - LITERALS
console.log("Javascript");   //STRING
console.log(123)    //NUMBER
console.log(true)   //BOOLEAN
console.log( [1, 2, "javascript" , false] )    //ARRAY
console.log( { name : 'tej' , day : 1 , course : true } )    //OBJECT

console.log({company : "TCS" , emp : 786 , location : "no.123 address"})



//2 VARIABLE VALUES
//VAR , LET , CONST - VARIABLE KEYWORDS

//VAR - functional scope
var a = 10   //Declared or Assigned
console.log(a)

var a = 20    //Re-Declare is allowed
console.log(a)  

a = 30    //Re-Assignment is allowed
console.log(a)


//LET - Blocked scope

let b = 100
console.log(b)

// let b = 200  //Re-Declaration is Not allowed

b = 200   //Re-Assigned is allowed
console.log(b)



//CONST  - blocked scoped , immutable 

const c = 1000
console.log(c)

// const c = 2000  //Re-Declare is not allowed

// c = 3000  //Re-assignment is not allowed
console.log(c)


//DATA TYPES
//PRIMITIVE - STACK MEMORY - NUMBER , STRING , BOOLEAN , UNDEFINED , NULL , NAN
let num = 786
console.log(typeof num)

let str = "javasript"
console.log(typeof str)

let boo = true
console.log(typeof boo)

let und
console.log(typeof und)

let n = null
console.log(typeof n)

let nan = 'hello' + 5
console.log(nan)
console.log(typeof nan)

console.log("five"/ 10 )



//NON - PRIMITIVE - HEAP MEMORY - ARRAY , OBJECT , FUNCTION
let arr = [1, 2, 3]
console.log(typeof arr)

let obj = {name:'tej' , day :1 , job : "trainer"}
console.log(typeof obj)

function greet(){
    console.log("Hello world")
}
greet()

console.log(typeof greet)

