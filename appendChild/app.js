// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// selecting result div element with querySelector
const result = document.querySelector("#result");

// creating div element using createElement method
const bodyDiv = document.createElement("div");

// creating text for div above using createTextNode
const text = document.createTextNode("a simple text for body div");

// adding div to the bodyDiv using appendChild method
bodyDiv.appendChild(text);

// appending bodyDiv to the body using appendChild
document.body.appendChild(bodyDiv);

// 2nd example adding some heading to the result div using same steps

const someHeading = document.createElement("h2");
const someHeadingText = document.createTextNode("heading text");
someHeading.appendChild(someHeadingText);
someHeading.classList.add("blue");
result.appendChild(someHeading);
