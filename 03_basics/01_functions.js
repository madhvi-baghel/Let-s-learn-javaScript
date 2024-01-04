function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("V");
    console.log("I");
} 

// sayMyName//function refrence
// sayMyName()//function execution


// function addTwoNumvers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumvers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumvers(10,20)
// console.log("Result ",  result);//Result 30


// function loginUserMessage(username){
//     if(!username){
//         console.log("please enter a username");
//         return
//     }
//     // if(username === undefined){
//     //     console.log("please enter a username");
//     //     return
//     // }
//     return `${username} just logged in`
// }
// // console.log(loginUserMessage('madhvi'));//madhvi just logged in
// console.log(loginUserMessage());//undefined just logged in



function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());//sam just logged in
// console.log(loginUserMessage("madhvi"));//madhvi just logged in overwrite

//e commerce cart
function calculateCartPrice(val1, val2, ...num1){//...rest operator
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000))//[ 500, 2000 ]

const user = {
    username:"madhvi",
    price:199
}

function handleObject(anyobject){//using object in function
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)//username is madhvi and price is 199
handleObject({
    username:"sam",
    price:399
})//username is sam and price is 399

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
   return getArray[1]
}
// console.log(returnSecondValue(myNewArray));//400
console.log(returnSecondValue([200, 400, 500, 1000]));//400

