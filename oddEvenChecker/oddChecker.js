// Modules protect their variable and function from being accessed outside the file.


function oddNumber(number) {
    if( number % 2 === 1){
        console.log(`${number} is a odd number!!!`);
    }else {
        console.log(`${number} is not a odd number!!!`);
    }
}

// We need to only expose which function and variables we want other module to use.
// cjs method
module.exports = oddNumber ;

// Ecmascript method
// export function oddNumber(number) {
//     if( number % 2 === 1){
//         console.log(`${number} is a odd number!!!`);
//     }else {
//         console.log(`${number} is not a odd number!!!`);
//     }
// }
