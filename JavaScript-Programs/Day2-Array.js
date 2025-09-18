//ARRAY METHODS

// var arr = [10, 20, 'javascript' , true, [100, 200, 'playwright']]   //Declare

// //ACCESS USING INDEX, STARTS FROM 0. 

// console.log(arr.length-1)

// console.log( arr[2][0]  )    //TWO DYMANSION ARRAY

// console.log( arr[4][2][3]  )    //MULTI DYMANSION ARRAY


//PUSH
var arr = [10, 20, 30, 40, 50]

arr.push(60, 'tej')
console.log(arr)


//POP
arr.pop()
console.log(arr)



var arr = [10, 20, 30, 40]

//SHIT
arr.shift()
console.log(arr)


//UNSHIFT
arr.unshift(100, 'play')
console.log(arr)


//TO STRING
var arr = [100, 200, 300, 400, 500]

var store = arr.toString()
console.log(typeof store)

////EXAMPLE STRING
// var str = '100,200,300'
// console.log(str)


//CONCAT
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]

console.log(arr1 , arr2, arr3)  //PROVIDE SEPERATE VALUES

console.log(arr1 + arr2 + arr3)  //IT WILL MERGE THE VALUES BUT, STRING TYPE

console.log(arr2.concat(arr3 , arr1))   // IT WILL ADD THE VALUES WHICH REFERANCE WE DECLARE



//SLICE - BASED ON STARTING INDEX BETWEEN ENDING INDEX +1

var arr = ['apple' , 'orange' , 'cherry' , 'pine-apple' , 'grapes', 'banana', 'strawberry', 'carrot']

var str = arr.slice(2 , 5)
console.log(str)



//SPLICE - BASED ON STARTING INDEX , DELETE-COUNT-NUMBERS, ...VALUES

var arr = [100, 200, 300, 400, 500, 600, 700]
//REMOVE
arr.splice(2 , 4)    //index, deleteCount
console.log(arr)

//REPLACE
arr.splice(1, 2, 30, 40, 50)
console.log(arr)

//INSERT
arr.splice(1, 0, 60, 70, 80, 90)
console.log(arr)


//MAP - TRANSFERMATOR
var arr = [4, 9, 16, 25, 36 , 786.123]

var str = arr.map(Math.sqrt)
console.log(str)

str = arr.map(function(a){
    return a <= 13
})
console.log(str)


//FILTER - 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

str = arr.filter(function(a){    // MODULUS = REMINDER
    return a%2==0
})         
console.log(str)



//REDUCE -

var arr = [ 10, 20, 30, 40, 50 , 60]

str = arr.reduce(function (num1 , num2, num3 , num4){
    return num1 + num2 //+ num3   + num4
})
//num1 10 + num2 20 = 30
//num1 30 + num2 30 = 60
//num1 60 + num2 40 = 100
//num1 100 + num2 50 = 150
console.log(str)




//VALUES
var arr = ["apple", "orange", "banana", "strawberry"]

str = arr.values()

for (const element of str) {
    console.log(element)
}



//FOR-EACH
var arr = [10, 20, 30, 40, 50]

arr.forEach(function(num){
    console.log(num)
})



//REVERSE
var arr = [10, 20, "javascript" , "playwright" , true]
console.log( arr.reverse() )


//JOIN

var arr = [10, 20, 30, 40]

console.log(arr.join(' @#$%^&*() '))


//REVERSE the STRING
var ab = "javascript"     
console.log( ab.split('').reverse().join(''))


//SORT
//ASCENDING ORDER
var arr = [11, 2, 65, 96, 23, 1, 7, 46]

arr.sort((a , b) =>{
    return a - b
})

console.log(arr)


//DESCENDING ORDER
arr.sort((a , b) =>{
    return b - a
})
console.log(arr)




