// Common js method
const { evenNumber , oddNumber } = require("./oddEvenChecker");

//Ecmascript method
// To use ESM , add a file package.json with: { "type": "module" }
// import { a , evenNumber , oddNumber} from "./oddEvenChecker"


console.log("This is main file!!!");

let number1 = 24;

evenNumber(number1)
oddNumber(number1)


// GLOBAL OBJECT 
// It’s the top-level object in the JavaScript environment.
// All global variables and functions become properties of this object.

console.log(this) // browser global object in nodejs is empty
console.log(global) // nodejs global object 
console.log(globalThis) // Common in nodejs and browser
console.log(global === globalThis) // both are equall