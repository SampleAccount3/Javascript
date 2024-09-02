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

let computedProps = "greet";

let ComputedObj = {
    [computedProps]: "Hello",
}

console.log(ComputedObj.greet);
