//OBJECT 

//APPROACH - 1
let obj1 = {
    name : '100',
    purpose : "increment",
    action : function(){
        console.log(this.name++ , this.name)
    }
}

console.log(obj1.name)
console.log(obj1.purpose)
obj1.action()
obj1.action()
obj1.action()


//APPROACH - 2

let obj2 = new Object();

obj2.company = "CTS"
obj2.emp = 786
obj2.location = true

console.log(obj2.company)
console.log(obj2.emp)

//CLASS - PARENT, SUPER
//THIS is a Keyword. It representing by Current class Properties.
class user1{
    constructor(name){
        this.name = name
    }
    login(){
    console.log("Hi!", this.name, "Welcome")
       return this
    }
    logout(){
   console.log("Thank you visit again")
    }
}

// let person1 = new user1("Vijay")
// person1.login()
// person1.logout()



//CLASS - CHILD, SUB
//STATIC is a keyword.STATIC VARIABLE & STATIC METHOD. STATIC can be access only by class name.
//EXTENDS is a keyword. We can inherite the Parent to child class.
//SUPER is a keyword. Represted by Parent class properties.
class user2 extends user1{
    static countOfUsers = 0

    constructor(name, course){
        super(name)
  this.course = course
  user2.countOfUsers++
    }
    display(){
   console.log("Today course", this.course,"is got over")

    }

    static fetchData(){
        console.log(`Today logged in count is : ${user2.countOfUsers}`)
    }
}
let person2 = new user2("JavaScript")
person2.display()
user2.fetchData()
user2.fetchData()
let person3 = new user2("Satyavrat","JavaScript")
user2.fetchData()
person3.login().display()
