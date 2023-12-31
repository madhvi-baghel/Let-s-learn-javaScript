//Dates

let myDate = new Date()
// console.log(myDate);//2023-12-31T02:55:56.449Z
// console.log(myDate.toString());//Sun Dec 31 2023 02:57:06 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Sun Dec 31 2023
// console.log(myDate.toISOString());//2023-12-31T02:59:55.073Z
// console.log(myDate.toJSON());//2023-12-31T02:59:55.073Z
// console.log(myDate.toLocaleDateString());// 12/31/2023
// console.log(myDate.toLocaleTimeString());// 2:59:55 AM
// console.log(typeof myDate);// Date is a object


// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());//Mon Jan 23 2023
// let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());//  1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());//1/14/2023, 12:00:00 AM


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);//12
console.log(newDate.getDay());//0

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
    // timeZone:'55.073Z'
})
