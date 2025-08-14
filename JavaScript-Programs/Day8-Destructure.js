//ARRAY DESTRUCTRE

//BASIC DESTRUCTURE
var arr = [1,2,3,4,5]
var [a,b,c,d,e] = arr // [1,2,3,4,5]
 
console.log(a)
console.log(b)
console.log(c)
console.log(a, b, c, d, e)
console.log([a, b, c, d, e])


//SKIPPING ELEMENTS
var arr = [10, 20, 30, 40, 50, 60]
var [a, b, c, , e, f] = arr

console.log(a)
console.log(c)
console.log()
console.log([a, b, c, , e, f])
// console.log(a, b, c, , e, f)


//REST OPERATOR
var arr = [10, 20, 30, 40, 50, 60, 70]
var [a,b,c,...d] = arr

console.log(a)
console.log(b)

console.log(...d)  //will providing some space
console.log(d) //providing excat values are stored



//SKIP & REST
var arr = [100, 200, 300, 400, 500, 600, 700, 800]
var [a, b, c, , e, ...f] = arr

console.log(a)
console.log(b)
console.log(f)
console.log([a,b,c,,e,f])


//SWAPPING
var a = 10
var b = 20
var a = b  //a = 20
var b = a  //b = 20
console.log(a)
console.log(b)

var x = 100 , y = 200
var [x, y] = [y,x]  // [x, y] = [200, 100]
console.log(x)
console.log(y)



//FOR METHODS
console.log('---FOR LOOP---')
for(let i=1; i<=5; i++){
    console.log(i)
}
console.log('---FOR LOOP REVERSE---')
for(let i=5; i>=1; i--){
    console.log(i)
}

console.log('---for loop---')
var arr = [100, 200, 300, 400, 500]
for(let i=0 ; i< arr.length; i++){
    console.log(arr[i] , i)
}


//FOR OF
console.log('---FOR OF---')

var arr = [1, 2, 3, 4, 5]
for (const rrr of arr) {
    console.log(rrr)
}


//FOR IN
console.log('---FOR IN---')

var arr = [10, 20, 30, 40, 50]
for (const key in arr) {
   console.log(arr[key] , key)
}

console.log('---FOR IN---')
var obj = {name:'tej' , age :25, jobStatus : true}

for(let key in obj){
    console.log(key)
    // console.log(  obj[key] )
}



