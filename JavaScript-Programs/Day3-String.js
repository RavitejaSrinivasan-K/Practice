//STRING METHODS

var str0 = ["Javascript Programming" , "java Program", [1, 2, 3], [4, 5, 6] , [7,8,9]]
console.log(str0[0][11])  //Index - Multi Dymantion Array


//SLICE -based index between ending +1 (or) length

var str = "Javascript Program Language"
console.log(str.slice(11, 18 ))
console.log(str.slice(-27 , -17 ))
console.log(str.length)

//SUBSTRING
str = "Javascript Program Language"
console.log(str.substring(19 , 27))


//CONCAT
let str1 = "JavaScript"
let str2 = "Program"
let str3 = "Language"

console.log(str1.concat(str2 , str3))


//UPPERCASE 
str = "javascript programming"
console.log(str.toUpperCase())

//LOWER CASE
str = "JAVASCRIPT PROGRAMMING"
console.log(str.toLowerCase())


//REPLACE
str = "JavaScript programming language"
console.log(str.replace('a' , '$'))

//REPLACE ALL
console.log(str.replaceAll('JavaScript' , "*"))


//TRIM
str = "   Javascript   Program   "
console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())


//CHAR AT
str = "Javascript Program"
console.log(str.charAt(2))


//INDEX of
str = "Javascript Program"
console.log(str.indexOf('P'))


//LAST INDEX OF
str = "Javascript Program"
console.log(str.indexOf('a'))
console.log(str.lastIndexOf('a'))


//SPREAD AND REST (...) it is not a method
str = "Javascript"
console.log(...str)


//REST
var arr = [1, 2, 3, 4, 5, 6]
var [x, y, z , ...abc] = arr
console.log(x)
console.log(abc)


//REVERSE
var arr = ["javascript" , "gang" , 23]
console.log(arr.reverse())

str = "Javscript Programing"
var s = str.split('').reverse().join("")
console.log(s)