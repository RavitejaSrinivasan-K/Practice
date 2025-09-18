//CONDITIONAL STATEMENTS
//IF, ELSE IF, ELSE, 

let age = 23
if(age >= 18 && age == '23'){
    console.log("Eligible")
    if(age == 23){
        console.log("Good After")
    }
}
if(age <= 23){
    console.log("At same only")
}
else if(age == '23')
{
    console.log("Same..")
}
else if(age ==='23'){
console.log("Good")
}
else{
    console.log("Not eligible")
}

// SWITCH, BREAK , CONTINUE
let day = 5
switch(day){
case 1:
    console.log("Monday")
break
case 2:
    console.log("Tuesday")    
break
case 3:
    console.log("Wednessday")
break
case 4:
    console.log("Thursday")
break
case 5:
    console.log("Friday")    
break
default:
    console.log("Happy Its weekend")    
}

//LOOPS - FOR
console.log('---For Loop---')
//Initialize; Condition; Increment / Decrement
for(let i=1; i<=10; ++i)
{
    // console.log(i)
    for(let j=1; j<=i ; j++){
        console.log('*')
    }
}

//WHILE
console.log('---WHILE---')
let j = 1
while(j<=5){
console.log(j)
j++
}


console.log('---DO WHILE---')
let k =1
do{
    console.log(k)
    k++
}while(k>=5)


console.log('---CONTINUE---')
//CONTINUE
for(let a=1; a<=10; a++)
{
    if(a==6){
       continue
    }
       console.log(a)
}



//PRACTICE - 2

//IF, ELSE, ELSE IF, SWITCH, BREAK, CONTINUE


let voteAge = 18
if(voteAge > 23){
    console.log("ELIGIBLE")

    if(voteAge < 25){   //NESTED IDF CONDITION
        console.log(true)
    }
    else{
        console.log(false)
    }

}



else if(voteAge > 23){
    console.log("NOT ELIGIBLE")
}
else if(voteAge === '18')
{
    console.log('YES RYT')
}
else{
    console.log("Sorry!")
}



//SWITCH
console.log('---SWITCH---')

let day = 60
switch(day){
    case 1 : console.log("Monday")
    break
    case 2 : console.log("Tuesday")
    break
    case 3 : console.log("Wednesday")
    break
    case 4 : console.log("Thursday")
    break
    case 5 : console.log("Friday")
    break
    default : console.log("Happy its weekend!")
    break
      
}




//LOOPS 
console.log('---FOR---')
//initialization ; condition ; increment / decrement
for(let i=1; i<=5; i++){
    console.log(i)
}



//WHILE
//initialization 
//  condition 
//  increment / decrement
console.log('---WHILE---')

let j = 1
while(j >= 5)
{
     j++
    console.log(j)
   
}


//DO- WHILE
 console.log('---DO-WHILE---')
//initialization 
//  increment / decrement
//   condtion

let k =1
do{
    console.log(k)
      k++
}
while(k >= 5)




 console.log('---CONTINUE---')


 for(let a=1 ; a<=10 ; a++){
    if(a == 4){
        continue
    }
    console.log(a)
 }


