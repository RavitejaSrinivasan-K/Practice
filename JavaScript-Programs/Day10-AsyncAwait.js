//ASYNC & AWAIT

//SYNCHRONOUS
console.log('START')
console.log('MIDDLE')
console.log('END')

//ASYNCHRONOUS
console.log('MORNING')
setTimeout(()=> console.log('AFTERNOON') , 5000)
console.log('EVENING')




//ERROR HANDLING
//BOUNDARY CRETERIA : MIN=18 
try{
    let age = 'WERTY#$%^&*'
     if(age == ''){
        throw("Dont skip")
    }
    else if(age == ' '){
        throw('Invalid input')
    }
    else if(isNaN(age)){
       throw('Invalid Credentials')
    }
    else{
        console.log('Thank you!')
    }
}
catch(a){
    console.log(Error(a))
}




//ASYNC AND AWAIT
async function data(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve('Hi Buddy')
            reject(new Error("Sorry Buddy"))
        }, 2000)
    })
}

// console.log(data())


async function display(){
    console.log('Hi Ai bot')

    try{
        const fetch = await data()
        console.log( fetch)
    }
    catch(msg){
        console.log( msg)
    }
    console.log('Bye!')
}


display()




