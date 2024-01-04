// var c = 300 //global scope
let a = 300
if(true){       //{
    let a = 10    //block scope 
    const b = 20  //}
    console.log("INNER: ", a);//INNER:  10
}

// console.log(a);//300
// console.log(b);
// console.log(c);

