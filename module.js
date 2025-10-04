// These will provide you the exact NodeJs wrapper function called IIFE
const { wrapper } = require("module");
console.log(wrapper) // output ['(function (exports, require, module, __filename, __dirname) { ','\n});']


// All the code of the module is wrapped inside a function(IIFE) 
// Why IIFE because it private the variables and function from leaking in global scope , with that Nodejs also provide five powerfull variables.
// (require , module , exports , __filename , __dirname ) It is used for writting modular code.

console.log(__filename);
console.log(__dirname);

//IIFE - Immediately Invoked Function Expression

// (function (module, require) {

//     require("./path")
//     // ALL code of the module runs inside here
//     function calculateAddition(a, b) {
//         const result = a + b;

//         console.log(result);
//       }

//       module.exports = { calculateAddition };

// })();

// (function (exports, require, module, __filename, __dirname) {

//     // ALL THE CODE OF YOUR MODULE 
// });