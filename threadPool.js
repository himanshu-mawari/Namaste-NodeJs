process.env.UV_THREADPOOL_SIZE = 4; // Initialse threadpool size before the libuv is loaded.
// Doing this will not work in the latest versions of Node.js as the default size is 4 and the max is 128.
// Other way to set the UV_THREADPOOL_SIZE is through terminal using the command
// in mac/bash(window) : UV_THREADPOOL_SIZE = 3.


const crypto = require("node:crypto");

console.log("Hello Himanshu!!! here we do changes in the threadpool size!!")

crypto.pbkdf2("password123" , "salt" , 500000 , 512 , "sha512" , (err , derivedKey) =>{
    console.log("Password 1 is hashed succesfully!!!")
})


crypto.pbkdf2("password123" , "salt" , 500000 , 512 , "sha512" , (err , derivedKey) =>{
    console.log("Password 2 is hashed succesfully!!!")
})


crypto.pbkdf2("password123" , "salt" , 500000 , 512 , "sha512" , (err , derivedKey) =>{
    console.log("Password 3 is hashed succesfully!!!")
})


crypto.pbkdf2("password123" , "salt" , 500000 , 512 , "sha512" , (err , derivedKey) =>{
    console.log("Password 4 is hashed succesfully!!!")
})


crypto.pbkdf2("password123" , "salt" , 500000 , 512 , "sha512" , (err , derivedKey) =>{
    console.log("Password 5 is hashed succesfully!!!")
})










