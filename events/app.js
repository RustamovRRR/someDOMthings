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

// working with mouse events
// mousedown
// mouseup
// mouseenter
// mouseleave

const heading2 = document.querySelector("h2");
const btnMouse = document.querySelector(".btn-mouse");

btnMouse.addEventListener("click", function () {
  console.log("click");
});

btnMouse.addEventListener("mousedown", function () {
  console.log("mousedown");
});

btnMouse.addEventListener("mouseup", function () {
  console.log("mouseup");
});

btnMouse.addEventListener("mouseenter", function () {
  console.log("mouseenter");
});

btnMouse.addEventListener("mouseleave", function () {
  console.log("mouseleave");
});

heading2.addEventListener("mouseenter", function () {
  heading2.classList.add("blue");
});

heading2.addEventListener("mouseleave", function () {
  heading2.classList.remove("blue");
});

// keypress
// keydown
// keyup

const nameInput = document.getElementById("name");

// addeventlistner
// keypress
// nameInput.addEventListener("keypress", function () {
//   console.log("keypress");
// });

// keydown
// nameInput.addEventListener("keydown", function () {
//   console.log("keydown");
// });

// keyup
nameInput.addEventListener("keyup", function () {
  //   console.dir(nameInput);
  console.log(nameInput.value);
});

// event object

// event object argument e, evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevent default behaviours

const walterHeading = document.querySelector(".walter");
const eventObjBtn = document.querySelector(".btn-event");
const link = document.getElementById("link");

walterHeading.addEventListener("click", function (event) {
  event.currentTarget.classList.add("blue");
  //     console.log(event);
  // using this
  console.log(this);
  // in arrow function it wont work
});

eventObjBtn.addEventListener("click", function (event) {
  console.log(event.type);
});

link.addEventListener("click", function (event) {
  event.preventDefault();
});
