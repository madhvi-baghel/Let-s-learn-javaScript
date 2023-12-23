const name = "madhvi";
const repoCount = 50;

//console.log(name + repoCount +  " Value"); //madhvi50 Value

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //hello my name is madhvi and my repo count is 50

const gameName = new String('madhvi-mb-com')
// console.log(gameName[0]);//m
// console.log(gameName.__proto__);//1 type to access method


//and this is type 2
// console.log(gameName.length);//6
// console.log(gameName.toUpperCase());//MADHVI
// console.log(gameName.charAt(2));//d
// console.log(gameName.indexOf('a'));//1

const newString = gameName.substring(0,4)
// console.log(newString);//madh

const anotherString = gameName.slice(0,4)
// console.log(anotherString);//madh //hum negative value bhi use kar sakte he

const newStringOne = "  madhvi   "
// console.log(newStringOne);//it show with spaces
// console.log(newStringOne.trim());// but in trim it show without spaces

const url = "https://madhvi.com/madhvi%20baghel"

console.log(url.replace('%20','-'));//https://madhvi.com/madhvi-baghel
console.log(url.includes('madhvi'))//true
console.log(url.includes('sunder'))//false

console.log(gameName.split("-"));//[ 'madhvi', 'mb', 'com' ]