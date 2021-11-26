// select element
// addEventListener
// what event what to do

// selecting elements by using querySelector
const btn = document.querySelector(".btn");
const heading = document.querySelector("h1");

// using addEventListener() method
btn.addEventListener("click", function () {
  if (!heading.classList.contains("red")) {
    heading.classList.add("red");
  } else {
    heading.classList.remove("red");
  }
});
// abouve with used addEventListener with click event
