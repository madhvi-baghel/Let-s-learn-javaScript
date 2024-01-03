// const tinderUser = new Object()//singletone
const tinderUser = {}//object literals
// console.log(tinderUser);//{}

tinderUser.id ="123abc"
tinderUser.name ="sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);//{ id: '123abc', name: 'sammy', isLoggedIn: false }

const regularUser ={
    email:"some@gmail.com",
    fullname: {
        userfullname: {
          firstname: "madhvi",
          lastname: "baghel"
        }
    }
}
// console.log(regularUser.fullname.userfullname);//{ firstname: 'madhvi', lastname: 'baghel' }

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1,obj2}
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2)//type1
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2}//type2
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const user = [
    {
        id:1,
        email: "m@gmail.com"
    },
    {
        id:1,
        email: "m@gmail.com"
    },
    {
        id:1,
        email: "m@gmail.com"
    }
]

user[1].email
// console.log(tinderUser);//{ id: '123abc', name: 'sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ] we get keys in the form of  array
// console.log(Object.values(tinderUser));//[ '123abc', 'sammy', false ] 
// console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true  to check property exists or not
console.log(tinderUser.hasOwnProperty('isLogged'));//false if property doesnt exist
