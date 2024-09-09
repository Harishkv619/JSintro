document.write("Hello World -changed");
document.write("<br>");
document.write("Hello World -changed");
console.log("This is a test message")
console.warn("Warning")
console.error("error message")

// single line comment
/*This 
is a
multiline comment*/


// let var const

let person="Anie"
console.log(person)

var age=19
console.log(age)

const pi=3.14
console.log(pi)

console.log(a)
var a=10

/*console.log(b)
let b=10 */
// hoisting

function varTest(){
    var x=1;
    if(true){
        var x=2;
        console.log(x);
    }
    console.log(x);
}
varTest()


function letTest(){
    let y=1;
    if(true){
        let y=2;
        console.log(y);
    }
    console.log(y);
}
varTest()