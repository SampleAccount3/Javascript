"use strict";
// Console Logs
console.log("Sample");
// Alert Samples
// alert("Script Alert");
// ["Sample1","Sample2","Sample3"].forEach(alert);

// Variable declaration

//String declaration  
let sample1 = "This is Sample Variable 1";
let sample2 = "This is Sample Variable 2";
let sample3 = "This is Sample Variable 3";
//Integer declaration
let num1 = 1,
    num2 = 2,
    num3 = "3";
//Constant variable Declaration
console.log("********** ********** **********")
console.log("Constant variable Declaration: ")
const unchangeableVar = "1";
let str = "Sample String";
// String Interpolation using ``(backTick)
let embedToAnotherVar = "use this Variable to another variable";
let strThatHasBackTick = `Hello this is the backed Tick sample and you can  ${embedToAnotherVar}`;
//  "" and '' is not supported if you want to embed another variable. Use ``.
let strThatHasBackTick2 = "Hello this is the backed Tick sample and you can  ${embedToAnotherVar}";
let embeddedExpression = `This is a sample of an Embedded Expression, ${1 +2 }`  // = 3
console.log(embeddedExpression);
console.log(strThatHasBackTick);

// Boolean Declaration
console.log("********** ********** **********")
console.log("Boolean Declaration")
let isTrue = true;
let isFalse = false;
console.log(isTrue);
console.log(isFalse);
// Boolean expression as value
let isTrueComputation = 4<3;
let isSame = 4===4;

console.log("isTrueComputation 4<3: " + isTrueComputation);
console.log("isSame  4===4: " + isSame);

// null and undefined
console.log("********** ********** **********")
console.log("Null and Undefined")

let undfinedVar;
console.log("This is a Sample of an undefined Variable: " + undfinedVar);

let nullVar = null;
console.log("This is a Sample of a Null Variable: " +nullVar);

// Typeof Operand checks the data types of your Variables
console.log("********** ********** **********");
console.log("Typeof Operand: ");
console.log(typeof isTrueComputation); // boolean
console.log(typeof undfinedVar); // undefined
console.log(typeof nullVar); // object 
console.log(typeof strThatHasBackTick); // string
console.log(typeof num2); // number

// Type Conversion
console.log("********** ********** **********");
console.log("Type Conversion: ");

let booleanToString = true;
console.log("booleanToString: " + typeof booleanToString);
let convertedBooleanToString = String(booleanToString);
console.log("convertedBooleanToString: " + typeof convertedBooleanToString);
let stringToInteger = "555";
console.log("stringToInteger: " + typeof stringToInteger);
let convertedStringToInteger = Number(stringToInteger);
console.log("convertedStringToInteger: " + typeof convertedStringToInteger);

// Boolean Conversion
let boolean0 = 0;
let boolean1 = 1;

console.log(Boolean(boolean0));
console.log(Boolean(boolean1));

// Alert, Prompt, Confirm

// commented out the alerts and prompt

// Alert shows a message.

// alert("Sample Alert");


// Prompt shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.

// let resultPrompt = prompt("This is a Sample Prompt","The Default value is required");
// alert(`Hello ${resultPrompt}`);
// let samplePrompt = prompt("Test", "");


// Confirm shows a message and waits for the user to press “OK” or “Cancel”.It returns true for OK and false for Cancel/Esc.

// let isBoss = confirm("Are you the boss? ");
// alert(isBoss);
