// nextSibling
// previousSibling
// return whitespace

// testing nextSibling
const first = document.querySelector(".first");
// you should use 2 times nextSibling because first time it will return whitespace
const second = first.nextSibling.nextSibling;
// console.log(second);
second.style.color = "green";
second.style.fontSize = "2rem";

// testing previousSibling
const last = document.querySelector(".last");
// you should use 2 times previousSibling because first time it will return whitespace
const previous = last.previousSibling.previousSibling;
// console.log(previous);
previous.style.color = "red";
previous.style.fontSize = "3rem";

// a better way is using previousElementSibling and nextElementSibling
// they only selects elements not the white spaces
first.nextElementSibling.style.color = "grey";
last.previousElementSibling.style.color = "orange";
