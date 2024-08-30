console.log("Sample");
console.log("********** ********** ********** ********** **********");
console.log("Functions");

// Function Declaration
function sampleFunction(){
    return "Hello World";
}

console.log(sampleFunction());

// Function parameters with return values
function sampleFunctionParameters(param1, param2){
    return param1 + param2;
}

console.log(sampleFunctionParameters(2,3));
console.log(sampleFunctionParameters("Hello"," World"));


function withDifferentDatatypeReturn(choice){
    switch(choice){
        case 1:
            return "String";
        case 2:
            return 'c';
        case 3:
            return 1;
        case 4:
            return true;
        default:
            break;
    }
}

console.log(typeof withDifferentDatatypeReturn(1) + " " + withDifferentDatatypeReturn(1) );
console.log(typeof withDifferentDatatypeReturn(2) + " " + withDifferentDatatypeReturn(2) );
console.log(typeof withDifferentDatatypeReturn(3) + " " + withDifferentDatatypeReturn(3) );
console.log(typeof withDifferentDatatypeReturn(4) + " " + withDifferentDatatypeReturn(4) );

let globalVar = "The Function can this value after invoking"
console.log("Before manipulation " + globalVar);

function changeGlobalVar(){
    globalVar = "The Global Variable is change"
}

changeGlobalVar();

console.log("after manipulation " + globalVar);

function localVariable(){
    let globalVar = `
        This globalVar is a local vara not accessible outside this function
    `;
}

function usingCoalescingAsDefaultParameter(x){
    return x ?? "This is the Default Value for the Coalescing As Default Parameter";
}

console.log(usingCoalescingAsDefaultParameter())
console.log(usingCoalescingAsDefaultParameter("If there's an argument in this function it will return this value instead"))

console.log("********** ********** ********** ********** **********");
console.log("Function Expressions");

// In JavaScript a function is a Value meaning that you can pass around the source code of a function

function thisIsaFunction(){
    return "Returns the source Code";
}

console.log(thisIsaFunction);

// Assigning the function in a variable and then copies its functionality

let thisIsAVariableFunction = thisIsaFunction();

console.log(thisIsAVariableFunction);

let age = 18
let functionExpression;
// assigning the value of ageVerification on functionExpression
function ageVerification(){
    if (age <= 17){
        functionExpression = function(){
            return "You're not allowed here";
        };
    }else{
        functionExpression = function(){
            return "Welcome";
        };
    }
}
// before you can change the value of functionExpression you need to invoke the ageVerification function first.
ageVerification();

console.log(functionExpression());

// another example of function declaration

let money = 101;
let x = 2;
let y = 41;

// can be used when choosing a function based on the condition

let moneyStatus = money <= 100 ? 
    function(a,b){
        return "Poor: " + (String) (a + b);
    }:
    function(a,b){
        return "Rich: " + (String) (a * b);
    };

console.log(moneyStatus(x,y));

