console.log("Hello Himanshu!!! this file is sync.js")

// This module demonstrates a basic synchronous operation in Node.js.

const a = 2753085;
const b = 952042;

function multiply(a , b){
    const result = a * b;
    return result;
};

const answer = multiply(a,b);

console.log(`The multiplication of the ${a} and ${b} are ${answer}`);
console.log("End line of the file!!!")