console.log("Sample");

document.title = "Dom Changed the Title";

console.log(document.title);
const thisWillUpdateTheH1 = "This is the Updated Hello World"

const h1Message = document.getElementById("msg-HelloWorld");

h1Message.textContent = thisWillUpdateTheH1;
