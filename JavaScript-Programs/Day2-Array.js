//ARRAY METHODS
//INDEX STARTS FROM 0
//LENGTH STARTS FROM 1

var arr = [1, 2, "javascript" , true , [10, 20]]
    console.log(arr[2])
    console.log(arr[4])
    console.log(arr[2].length)  //PROPERTY
    console.log(arr[3].length)

//PUSH
var arr = [10, 20, 30, 40, 50]
arr.push(60, "satya" , true)
console.log(arr)

//POP
arr.pop()
console.log(arr)

//SHIFT
arr.shift()
console.log(arr)

//UNSHIFT
arr.unshift(10)
console.log(arr)

//[ 10|20|30|40|50 ]  - heap(Non -primitive)
//"10,20,30,40,50"| - stack (primitive)

//TO-STRING
arr = [1, 2, 3, 4, 5]
var store = arr.toString()
console.log(store)


//CONCAT
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]
console.log(arr1.concat(arr2 , arr3)) //[1,2,3, 4,5,6,7,8,9]
console.log(arr2.concat(arr1 , arr3))


//SLICE - based on starting index between end length(ending index +1)
//We can slice an array between same an array values
arr = [1,2,3,4,5,6,7,8,9]
console.log(arr.slice(2 , 5))
console.log(arr.slice(6 , 9))


//MAP 
arr = [4, 9, 16, 25]  //2, 3, 4, 5
var store = arr.map(Math.sqrt)
console.log(store)

var store = arr.map((b)=> b > 5)
console.log(store)

//FILTER
arr = [1, 2, 3, 4, 5, 6]
store = arr.filter((num )=> num % 2 == 0)  
console.log(store)


//SPLICE - Based on starting index , countofdigits, ...values
//Remove
arr = [10, 20, 30, 40, 50, 60, 70]
arr.splice(2 , 3)
console.log(arr)

//Update - replace
arr.splice(0 , 4 , 1, 2, 6, 7)  
console.log(arr)

//Insert - add
arr.splice(3, 0, 8, 9)
console.log(arr)

//Example
arr = [1, 2, 6, 7, 8]
arr.splice(2, 0, 3, 4,5)
console.log(arr)


//REDUCE
arr = [1, 2, 3, 4]  //10+20+30+40=100
store = arr.reduce((n1, n2)=> n1 * n2 )
//n1(10) + n2(20) = 30
//n1(30) + n2(30) = 60
//n1(60) + n2(40) = 100
console.log(store)

//VALUES
arr = [10, 20, 30, 40, 50]
store = arr.values()
for (let element of store) {
    console.log(element)
}

//FOR-EACH
arr = ["apple" , "orange" , "pine"]
arr.forEach((friuts)=> 
    console.log(friuts))

//REVERSE
arr = [1, 2, 3, 4, 5]
console.log(arr.reverse())

arr = [10, 20, 30, 40]  //10+20+30+40=100
store = arr.reduce((n1, n2)=> n1 * n2, 2  )
//n1(10) + n2(20) = 30
//n1(30) + n2(30) = 60
//n1(60) + n2(40) = 100
console.log(store)

//JOIN
arr = ['JavaScript' , 'Playwright' , 'Java' , 'Selenium']
store = arr.join('<-->')
console.log(store)
