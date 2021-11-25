// getElementsByClassName

// select the element or group of elements we want
// Decide the effect we want to apply to the selection
// getElementsByClassName("class name")

// node-list == array-like objects
// index, length properties but not array methods

const listItems = document.getElementsByClassName("listItem");

listItems[0].style.color = "blue";
listItems[1].style.color = "orange";
listItems[2].style.color = "green";
listItems[3].style.color = "red";

listItems[0].style.fontSize = "2rem";
listItems[1].style.fontSize = "3rem";
listItems[2].style.fontSize = "4rem";
listItems[3].style.fontSize = "5rem";
