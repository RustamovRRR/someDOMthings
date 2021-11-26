// select element
// addEventListener
// what event what to do

// selecting elements by using querySelector
const btn = document.querySelector(".btn");
const heading = document.querySelector("h1");

// using addEventListener() method
btn.addEventListener("click", function () {
  let hasClass = heading.classList.contains("red");
  if (hasClass) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
});
// abouve with used addEventListener with click event
