// select the element or group of elements we want
// Decide the effect we want to apply to the selection
// getElementsByTagNae("tag name")
// node-list == array-like objects
// index, length properties but not array methods

// it is dynamic if we remove first one the changes will apply to the second one
const headings = document.getElementsByTagName("h2");
headings[0].style.textAlign = "center";
headings[0].style.marginTop = "4rem";
headings[0].style.color = "green";
headings[0].style.transform = "scale(1.6) rotate(30deg)";

const listItems = document.getElementsByTagName("li");

const betterItems = [...listItems];

betterItems.forEach(function (item) {
  item.style.color = "grey";
  item.style.listStyleType = "none";
  item.style.fontSize = "1.5rem";
});
