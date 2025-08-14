//PROMISE

//APPROACH - 1
let p1 = new Promise((resolve, reject)=> {

let paymentStatus = false        //successfully done a payment call resolve
if(paymentStatus){
    resolve()
}
else{
    reject()
}

})
p1.then(success).catch(fail)  //HOISTING

function success(){
console.log("Successfully done...")
}

function fail(){
    console.log("Sorry Something went wrong...")
}



//APPROACH - 2

let p2 = new Promise((resolve, reject)=> {

let paymentStatus = true       //successfully done a payment call resolve
if(paymentStatus){
    resolve(2000)
}
else{
    reject()
}

})
p2.then((amount)=>console.log("Your payment went successfully" , amount))
.catch(()=>console.log("Something went wrong..."))  




//APPROACH - 3

function p3(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // resolve(1500)
            reject()
        }, 4000)
    })
}
p3().then((money)=>console.log(`Welcome to the tech world!  ${money}`))
.catch(()=> console.log(Error(`Some thing went gone wrong!`)))




































