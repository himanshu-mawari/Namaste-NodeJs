// Modules protect their variable and function from being accessed outside the file.


function evenNumber(number) {
    if (number % 2 === 0) {
        console.log(`${number} is a even number!!!`)
    } else {
        console.log(`${number} is not a even number!!!`)
    }
}

// We need to only expose which function and variables we want other module to use.
module.exports = evenNumber ;



// Ecmascript method
// export function evenNumber(number) {
//     if( number % 2 === 0){
//         console.log(`${number} is a even number!!!`)
//     }else {
//         console.log(`${number} is not a even number!!!`)
//     }
// }
