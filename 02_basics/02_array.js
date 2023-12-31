const marvel_heros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

// marvel_heros.push(dc)

// console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] it take array as data
// console.log(marvel_heros[3][1]);//flash

// const allHeros = marvel_heros.concat(dc)
// // console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(allHeros);// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc]//... spread operator
// console.log(all_new_heros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);//[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]



console.log(Array.isArray("Madhvi"))//false
console.log(Array.from("Madhvi"))// [ 'M', 'a', 'd', 'h', 'v', 'i' ]
console.log(Array.from({name: "Madhvi"})) //ager array nhi bana pata toh [] ye return karta he

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]