// Math Operators
console.log("********** ********** **********");
console.log("Math Operations");

// Unary 
// This Unary operand negates the unary variable 
console.log("Unary");
let unaryNegative = 1;
unaryNegative = - unaryNegative; // -1
console.log("unaryNegative: " + unaryNegative);

let unaryPositive = -1;
unaryPositive = - unaryPositive;
console.log("unaryPositive: " + unaryPositive);

let unaryStringToNumber  = "1"
console.log("Before Conversion unaryStringToNumber " + typeof unaryStringToNumber + " " +  unaryStringToNumber);

unaryStringToNumber = + unaryStringToNumber;
console.log("unaryStringToNumber " + typeof unaryStringToNumber + " " +  unaryStringToNumber)

console.log("Binary");

// Other Samples of Unary Operands ++x, x++, --x, x--, !bool, ~bitwise , typeof, instanceof

// Binary operands

let a = 10;
let b = 3;

let sum = a + b;         // 13
let difference = a - b;  // 7
let product = a * b;     // 30
let quotient = a / b;    // 3.333...
let remainder = a % b;   // 1
let exponent = a ** b;   // 1000 (10^3)

let x = 5;
let y = 10;

console.log(x > y);      // false
console.log(x < y);      // true
console.log(x >= y);     // false
console.log(x <= y);     // true
console.log(x == y);     // false
console.log(x != y);     // true
console.log(x === y);    // false (strict equality)
console.log(x !== y); 

let isItTrue = true;
let isItFalse = false;

console.log(isItTrue && isItFalse);  // false (AND)
console.log(isItTrue || isItFalse);  // true (OR)
console.log(!isItTrue);            // false (NOT, unary but often paired with binary logic

let counter  = 1;
let counter2  = 1;
// the Postfix ++ return the value first then increment
console.log(counter++);
// the Prefix ++ increment first then return the value
console.log(++counter2);