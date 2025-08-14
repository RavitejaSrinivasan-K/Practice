//FUNCTION TYPES

//1. BASIC - without parameter
function greet(){
    console.log("Hello World!")
}
greet()

//SINGLE PARAMETER
function single(a){
    console.log(a >= 19)
}
single(20)

//MULTIPLE PARAMETERS
function isEven(a , b)
{
    return a+b
}
console.log(isEven(10, 2))

//DEFAULT
function flames(num= 0){
    return "Welcome " + num
}
console.log(flames("Tej"))
console.log(flames())

function flame(n){
    return "Hello " + n
}
console.log(flame("Tej"))


//2 FUNCTION EXPRESSION

let greets = function()
{
    console.log("Hello Buddy!")
}
greets()

//SINGLE PARAMETER
let water = function(c){
    console.log("Water is " , c)
}
water('H2O')


//MULTI PARAMETER
let impossible = function(l, b, h){
    return l*b*h
}
console.log(impossible(10, 8, 7))
// impossible(10, 8, 7)

//DEFAULT PARAMETER
let defalt = function(name = 'empty'){
    console.log("Gud Morning " + name)
}
defalt()
defalt('Satya')
defalt('Tej')

//REST OPERATOR ...
let rest = function(...n){
    let result = 0
    for (var rest of n) {   //variablekeyword variable of parameterc
        result = result + rest 
         // result = 0 + rest(10) 10
        // result = 10 + rest(20) 30
        //result = 30 + rest(30) 60
        // result = 60 + rest(40) 100
        //result =100 + rest(50) 150
        //result = 150 + rest(60) 210
    }
    return result
}
console.log(rest(10, 20, 30, 40, 50, 60,))


//3 RECURSION
//5! = 5*4! -> 5*4*3! -> 5*4*3*2! -> 5*4*3*2*1! -> 

function fact(n){
   if(n == 1){
    return 2  //120 * 2 = 240
   }
    return n * fact(n-1)  //5 * (5-1)4 = 20
}
console.log(fact(5)) //5*4*3*2*1


//4 IIFE -IMMEDIATE INVOKED FUNCTION EXPRESSION

// (function secure(){
//     let key = "test@123"
//     console.log("Hidden the secret key")
// })()
// secure()



//5 AAROW FUNCTION
//WITHOUT PARAMETER
let bottle = ()=>{
console.log("Hello Buddy!")
}
bottle()

//SINGLE PARAMETER
let mobile = (m)=> console.log("Brand no. 1" , m)
mobile("Iphone")

//MULTI PARAMETER
let scale = (l,b,h)=>{
    return l*b*h
}
console.log(scale(2, 10, 10))

//DEFAULT 
let deflt = (name="satya")=> "welcome " + name
console.log(deflt())
console.log(deflt("Ajith"))



//6 ANONYMOUS
console.log("START")
setTimeout(()=> console.log("MIDDLE"), 5000)
console.log("END")


//7 CALL BACK


function redmi(){
    console.log("No.1 Brand in INDIA")
}

function realme(mobile, callback){
    console.log(mobile)
}

function oppo(device, back){
    return device
}

console.log(oppo("iPhone" , realme("REALME" , redmi())))




