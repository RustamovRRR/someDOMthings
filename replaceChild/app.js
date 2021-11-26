// replaceChild('new', 'old')

// selecing elements using querySelector
const result = document.querySelector("#result");
const redH1 = document.querySelector(".red");

// creating elements
const heading2 = document.createElement("h2");
const someText = document.createTextNode("some text");

// append text to the heading
heading2.appendChild(someText);

// adding class to the heading
heading2.classList.add("orange");

// some styling
heading2.style.fontSize = "3rem";
heading2.style.transform = "rotate(2deg) scale(1.1)";
heading2.style.width = "30vw";
heading2.style.margin = "0 auto";
heading2.style.marginTop = "3rem";
heading2.style.marginBottom = "5rem";
heading2.style.textAlign = "center";
heading2.style.padding = "1rem 0.5rem";
heading2.style.border = "2px solid grey";
heading2.style.borderRadius = "0.5rem";

// using insertBefore method
result.insertBefore(heading2, redH1);

const smallHeading = document.createElement("h1");
const smallText = document.createTextNode("small text");
smallHeading.appendChild(smallText);

smallHeading.style.fontSize = "5rem";
smallHeading.style.maxWidth = "30rem";
smallHeading.style.background = "green";
smallHeading.style.margin = "0 auto";
smallHeading.style.textAlign = "center";

// using replaceChild method
document.body.replaceChild(smallHeading, result);
