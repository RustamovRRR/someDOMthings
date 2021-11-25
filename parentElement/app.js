// parentElement

const heading2 = document.querySelector("h2");
const parent = heading2.parentElement.parentElement.parentElement;
console.log(parent);
parent.style.color = "green";
