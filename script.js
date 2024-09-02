console.log("Sample");

// Object Literal
console.log("********** ********** ********** ********** **********");
console.log("Object Literal");

// Initializing Object Literal
let objectSample = {
    name: "",
    age: 0,
    job: "",
    "Multi Word Props": "Sample"
};
// Deleting Object Literal Properties
console.log(objectSample);

delete objectSample["job"];
delete objectSample.age

console.log(objectSample);

// Object Literal Getter Setter

// Setter
objectSample.name = "Melares";

// Getter
console.log(objectSample.name);

// Getter at Runtime

// let getterAtRuntime = prompt("Setter at Runtime", ""); // sample value: name, Multi Word Props

// alert( "The new Value of property is: " + objectSample[getterAtRuntime]);

// Object Literal Computed Properties

// Adding dynamic property name
let computedProps = "greet";

let ComputedObj = {
    [computedProps]: "Hello",
}

console.log(ComputedObj.greet);

// creating a Factory for Object Literal 

function createObjectLiteral(name,age,job){
    return{
        name: name,
        age: age,
        job: job,
    };
}

// same as constructor
let worker = createObjectLiteral(
    "Melares",
    24,
    "Programmer");

console.log(worker);

// Object Literal with Property value shorthand

function createWorkers(name,age,javaExperience,laravelExperience){
    return{
        name,
        age,
        javaExperience,
        laravelExperience,
        totalExperience: javaExperience + laravelExperience,
    }
}

let wilconWorker = createWorkers(
    "Melares",
    24,
    2,
    1
)

console.log(`
        Your programming experiences are 
        java: ${wilconWorker.javaExperience}
        laravel: ${wilconWorker.laravelExperience}
        Total Experience: ${wilconWorker.totalExperience}
    `);


// in operator to check the existence of a property inside an object 

console.log(wilconWorker);

let propertyNotExist = "NotExisting";
let propertyExist = "name";

console.log(`
    Does "NotExisting" Exist in this object?
        ${propertyNotExist in wilconWorker}
    `);

console.log(`
    Does "name" Exist in this object?
        ${propertyExist in wilconWorker}
    `);

// For in Loop Object Literal
console.log("********** ********** ********** ********** **********");

console.log("For in Loop Object Literal");
// In this for loop the worker works like  an element in an array
// and it iterates the properties
// the wilconWorker[worker] gets the value of the iterated properties
//  name
//  melares
//  age
//  24
//  javaExperience
//  2
//  laravelExperience
//  1
for(let worker in wilconWorker){
    console.log(worker);
    console.log(wilconWorker[worker]);
}


console.log("********** ********** ********** ********** ********** ");
console.log("Referencing and Copying Objects");

let copyByReference = {
    message: "this is a Unmodified Props"
}

let copiedByReference = copyByReference;

console.log(copiedByReference.message);

copiedByReference.message = "This is a Modified Props"
// copiedByReference and copyByReference shares the same data Storage
// which means changing the value with the Referenced object will change the value for all the Referenced Objects
// now the copiedByReference and copyByReference has the same value
console.log(copiedByReference.message);
console.log(copyByReference.message);

//


console.log("********** ********** ********** ********** ********** ");
console.log("this");
// this == objectName 
function thisFunction(x , y){
    return{
        x,
        y,
        computeXY(){
            // by using this.var now you can now use the properties inside this object
            return this.x + this.y;
        }
    }
}

let thisAdditionFunction = thisFunction(2,3);

console.log(thisAdditionFunction.computeXY());

console.log("********** ********** ********** ********** ********** ");
console.log("new");

// In javascript you can create a constructor using a function

function functionConstructor(name, age, isGood){
    this.name = name;
    this.age = age;
    this.isGood = isGood;
    this.message = function () {
        return `
        Hello Mr. ${this.name} 
        Your age is ${this.age}
        and isGood? ${this.isGood}
        `;
    }
}

let assigningAfunctionInAnObject = new functionConstructor("Melares" , 24, true);

for(let key in assigningAfunctionInAnObject){
    console.log(key);
    console.log(assigningAfunctionInAnObject[key]);
}

console.log(assigningAfunctionInAnObject.message());



