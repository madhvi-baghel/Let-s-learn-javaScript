// singleton
  //object.create

// object literals

const mySym = Symbol("key1")

const jsUser ={
    name:"Madhvi",
    "full name":"Madhvi Baghel",
    [mySym]:"mykey1",
    age: 24,
    location:"jabalpur",
    email:"madhvi@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.email) //madhvi@google.com
// console.log(jsUser["email"]);//madhvi@google.com
// console.log(jsUser["full name"]) //in this case we have to use this method of access . method is not usable in this case
// console.log(jsUser[mySym])//mykey1
// console.log(typeof jsUser[mySym]);

jsUser.email="madhvi@chatgpt.com"
Object.freeze(jsUser)//after this value change nhi hogi
jsUser.email="madhvi@microsoft.com"
console.log(jsUser);
