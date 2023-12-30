const score = 400
// console.log(score);//400

const balance = new Number(100)
// console.log(balance);//[Number: 100]

// console.log(balance.toString());//100
// console.log(balance.toString().length);//3
// console.log(balance.toFixed(2));//100.00

const otherNumber = 23.8966
const otherNumber1 = 123.8966
const otherNumber2= 1123.8966

// console.log(otherNumber.toPrecision(3));//23.9
// console.log(otherNumber1.toPrecision(3));//124
// console.log(otherNumber2.toPrecision(3));//1.12e+3

const hundreds = 1000000
// console.log(hundreds.toLocaleString());//1,000,000 in us format
// console.log(hundreds.toLocaleString('en-IN'));//10,00,000 in indian format

// +++++++++++++++++++++++++++++++++++    Math  +++++++++++++++++++++++++++++++++

// console.log(Math);//Object [Math] {}
// console.log(Math.abs(-4));//it change negative value in positive output "4"
// console.log(Math.round(4.3));//rounded to nearest integer value output "4"
// console.log(Math.ceil(4.2));//top value it gives "5" as output
// console.log(Math.floor(4.9));//it take lowest value "4"
// console.log(Math.min(4,3,5,8));//3 minimum value
// console.log(Math.max(4,3,5,8));//8 maximum value

// console.log(Math.random());//range b/w 0 to 1 eg-- 0.5044371004168327
// console.log((Math.random()*10) + 1);// //range 1 to 9 with some decimal value
// console.log(Math.floor(Math.random()*10) + 1);//eg= 9

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min +1))+ min)


