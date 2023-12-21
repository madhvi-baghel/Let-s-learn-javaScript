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
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);//33
console.log(typeof stringNumber);//string