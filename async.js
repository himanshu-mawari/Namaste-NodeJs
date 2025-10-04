const fs = require("node:fs");
const https = require("node:https");

console.log("Hello Himanshu!!! this file is async.js");


// This module demonstrates a basic asynchronous operation in Node.js.

let a = 87837593;
let b = 95252875;

fs.readFile("./file.txt" , "utf8" , (err,data) =>{
    console.log("File reads successfully!!!");
});    


https.get("https://www.pokemon.com/psychic/abra" , (res) =>{
    console.log("Fetch data successfully and Status code : " + res.statusCode);
});    


setTimeout(() => {
    console.log("Timer will end at 5sec")
}, 5000);    


function calculateAddition(a , b){
    return a + b ;
};


const answer = calculateAddition(a , b);
console.log(`The Addition of ${a} and ${b} are ${answer}!!!`);

































