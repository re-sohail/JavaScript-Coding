// Data Types 2 trah ki hoti hain. 
// Permitive Data Types: Asy Data Type jo Language main Built-in hoty hain. For Example (int, var, string, let, float, double, etc)

// Non-Permetive Data Types: Asy Data Types Jo User Define hoty hain. In ko Reference Data Type bhi kaha jata hey. for example (Array, Object, Function, class)

// In JavaScript, We see only three type of Permitive Data Types such as number, String, Boleans

// Number (Int and double Data Type)
let a = 83
let b = 6.5

// String
let c = 'DG Khan'

// Booleans 
let loading = true
let lightGone = false

// Funcation: yeh Code of block hota hey. jab hamy koi code baar baar use karna hoo to ham usy baar baar nhi lekhty balkah aik function bana lety hain jis ko hum use kar lety hain jahan hamain zarorat hoti hey.

function Nomi(){
    let x = a + b;
    let y = a - b;
    let z = a * b;
    console.log(x, y, z);

    // return console.log( a + b)
}
Nomi()

function Data(a, b){
    return a + b
}
console.log(Data(2, 3))

// Anonymus Function with name (ES6)
let Info = function(a, b){
    return a + b
}
console.log(Info(4,5));

// Arrow Function (ES6)
// BackTik: yeh wahan use hota hey jaghan Dynamic Data Show karna ho.
let InfoData = (name)=>{
    return `Name: ${name}`
}
console.log(InfoData("Nomi"));

let Var = (Company)=>{
    return `Company Name: ${Company}`
}
console.log(Var("DevsCollab"));