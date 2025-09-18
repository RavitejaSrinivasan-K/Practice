//STRING

// var str = 'javascript programming'
// console.log(str.length-1)

// console.log( str[2] )


//SLICE - Based on starting index between ending index +1
var str = 'javascript programming'

var s = str.slice(0, 9)
console.log(s)

var s = str.slice(-22, -11)
console.log(s)

var s = str.slice(11, 22)
console.log(s)


//SUB STRING
var str = 'javascript programming'

s = str.substring(0, 10)
console.log(s)

// var s = str.substring(-22, -11)   //Negative values not allowed 
// console.log(s)




//REPLACE
var str = 'javascript programming'

s = str.replace('javascript' ,  'java' )
console.log(s)


//REPLACE ALL
s = str.replaceAll('a' , '@')
console.log(s)



//UPPER CASE
var str = 'javascript programming'
console.log(  str.toUpperCase() )


//LOWER CASE
var str = 'JAVASCRIPT PROGRAMMING'
console.log(  str.toLowerCase() )


//CONCAT
let str1 = 'javascript '
let str2 = 'programming '
let str3 = 'language'

console.log(str1, str2, str3)

console.log(str1 + str2 + str3)

console.log(str1.concat(str2 , str3))


//TRIM
str = '   javascript   with   playwright   '
console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())



//INCLUDES
var str = 'javascript programming'

console.log(  str.includes('zho')  )

//STARTS WITH
console.log(  str.startsWith('j')  )

//ENDS WITH
console.log(  str.endsWith('g')  )



//INDEX OF

var str = 'javascript program'

console.log(  str.indexOf('a') )

//LAST INDEX OF
console.log(  str.lastIndexOf('a') )


//SEARCH
var str = 'javascript programming language'

console.log(  str.search('a')  )


//CHAR AT
console.log(  str.charAt(9) )



//SPLIT
var str = 'javascript p,l,a,y,w,r,i,g,h,t'

console.log(str.split(','))


str = 'raviteja@gmail.com'

console.log( str.split('a') )


//REPEAT
var str = ' Crypto '

console.log( str.repeat(9) )

//REST
var str = ' JavaScript '

console.log(...str)

