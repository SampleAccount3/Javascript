console.log("Sample");

// Null Coalescing 

// The result of a ?? b is:
// if a is defined, then a,
// if a isn’t defined, then b.
console.log("********** ********** ********** ********** **********");
console.log("Null Coalescing");
let emptyCoalescing;
let withValeuCoalescing = "Hello World"

// it will log the "This the Default Value" because the emptyCoalescing is undefined/null
console.log(emptyCoalescing ?? "This the Default Value");

// it will log the withValeuCoalescing because it has a value
console.log(withValeuCoalescing ?? "This the Default Value");

console.log("********** ********** ********** ********** **********");
console.log("Looping");

// // shows the even number 
// for(let i = 0; i <= 100; i++){
//     if(i % 2 === 0 ){
//         console.log(i);
//         continue;
//     }
// }
// // shows the number that is divisible by 5
// for(let i = 0; i <= 100; i++){
//     if(i % 5 === 0) {
//         console.log(i);
//         continue;
//     }
// }

// for(let i = 0; i < 3; i ++){
//     console.log("i: " + i);
//     for(let j = 0; j < 3 ; j++){
//         if (i === 1) {
//             // using break will end the inner loop
//             // break;
//             // using continue will skip an iteration at inner loop
//             continue;
//         }
//         console.log("j: " + j);
//     }
// }

// // Loop labeling can be use to specify the loop that you want to break
// outerLoop: for(let i = 0; i < 10; i ++){
//     innerLoop: for (let j = 0; j < 10; j++){
//         // innerLoop is only accessible inside this loop 
//         console.log("j : " + j)
//         if(j === 9)  break innerLoop;
//         // if(j === 9)  break outerLoop;
//     }
//     console.log("i : " + i);
//     if(i === 9) break outerLoop;
// }

console.log("********** ********** ********** ********** **********");
console.log("Switch Case");

let aSwitch = 1;
// the aSwitch will call the cases 1 onwards until it reaches the breaking point
// if the value of aSwitch is = 2 it will call the case 2 onwards it will not include the previous cases 
switch (aSwitch) {
    case 1:
        console.log("this Calls the case 1");
    case 2:
        console.log("this Calls the case 2");
    case 3:
        console.log("this Calls the case 3");
        break;
    case 4:
        console.log("this Calls the case 4");
        break;

    default:
        console.log("Default Value");
        break;
}

switch(aSwitch){
    case 1:
    case 2:
    case 3:
    case 4:
        console.log(`
                in if else this is considered as
                if aswitch == 1 || 2 || 3 || 4 then show messages
            `);
        break;
    default:
        console.log("Default Value");
        break;
}

