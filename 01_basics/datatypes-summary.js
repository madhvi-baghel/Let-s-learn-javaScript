// Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score=100//number
const scoreValue=100.3//number

const isLoggedIn = false//boolean
const outsideTemp=null//null =>empty
let userEmail;//undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false
console.log(id == anotherId);//false

const bigNumber = 3455879512364478955421n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]//array
let myObj={
    name:"madhvi",
    age:"23",
}//object

const myFunction= function() {
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.


// ++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap(non-primitive)

let myYoutubename = "madhvibagheldotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename); //madhvibagheldotcom
console.log(anothername); //chaiaurcode

let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "madhvi@google.com"

console.log(userOne.email);//madhvi@google.com
console.log(userTwo.email);//madhvi@google.com