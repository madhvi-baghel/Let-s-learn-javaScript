let score = true//undefined//null //"33abc"

// console.log(typeof score); //string
// console.log(typeof (score));//string

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);//number
// console.log(valueInNumber);//NaN  //if we give null as a value then output is 0 not NaN //true ka output 1
//string ka output NaN hoga

//"33" => 33
//"33abc" => NaN (not a number)
//true =>1; false =>0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); //true

// 1 => true; 0 => false
// "" => false
// "madhvi" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);//33
// console.log(typeof stringNumber);//string

// **************************** Operations  ******************************

let value = 3
let negValue = -value
// console.log(negValue);//-3

// console.log(2+2);//4
// console.log(2-2);//0
// console.log(2*2);//4
// console.log(2**3);//8
// console.log(2/3);//0.66666666666
// console.log(2%3);//2

let str1 = "hello"
let str2 = " madhvi"

let str3 = str1 + str2
// console.log(str3);//hello madhvi

// console.log("1" + 2);//12
// console.log(1 + "2");//12
// console.log("1" + 2 + 2);//122
// console.log(1 + 2 + "2");//32

// console.log( (3 + 4) * 5 % 3);//2

//console.log(+true);//1
//console.log(true+);//error
// console.log(+"");//0

let num1, num2, num3

num1 = num2 =num3 =2 + 2 //not a good practise

let gameCounter=100
gameCounter++;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion