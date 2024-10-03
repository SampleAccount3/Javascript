console.log("Sample");

let numbers = [1,2,3,4,5,6,7,8,9,10];
let words = ['dog','cat','rat','bird','fish'];
const literalObjects ={
    0:"1st Element",
    1:"2nd Element",
    2:"3rd Element",
    name: "Melanio",
    age: 24,
    job:"Programmer"
};
// convert the literalObjects keys to an Array
const keys = Object.keys(literalObjects);
const values = Object.values(literalObjects);
console.log(keys); // ['0', '1', '2', 'name', 'age', 'job']
console.log(values); // ['1st Element', '2nd Element', '3rd Element', 'Melanio', 24, 'Programmer']

console.log(numbers);
console.log(words)

// "at" checks the content of the selected Index 
// x.at(index) 
const firstIndex = (x) => x.at(0);
console.log("First in Numbers: " + firstIndex(numbers));
console.log("First in Words: " + firstIndex(words));
// -negative selected Index will start the Selection at the last index
const lastIndex = (x) => x.at(-1);
console.log("Last in Numbers: " + lastIndex(numbers));
console.log("Last in Words: " + lastIndex(words));
// accessing the arrayLike using "at"
const arrayLike = {
    length: 2,
    0: "a",
    1: "b",
    2: "c", // ignored by at() since length is 2
  };
console.log(Array.prototype.at.call(arrayLike, 0)); // "a"
console.log(Array.prototype.at.call(arrayLike, 2)); // undefined

// Array Concatenation

// Arrow Function for Array multiple parameters array concat 
const addAllArray =(... arr) => [].concat(... arr);
// numbers + words + values
let collectionsOfAllArrays = addAllArray(numbers,words,values)

console.log(collectionsOfAllArrays);







