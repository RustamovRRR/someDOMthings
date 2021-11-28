// always select dynamic elements
// event propagation - order the events fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
  console.log(e.currentTarget);
  console.log(e.target);
  if (e.target.classList.contains("link")) {
    console.log("contains link");
  }
}

function stopPropagation(e) {
  e.stopPropagation();
}

container.addEventListener("click", stopPropagation, { capture: true });
list.addEventListener("click", showBubbling, { capture: true });
// document.addEventListener("click", showBubbling, { capture: true });
// window.addEventListener("click", showBubbling, { capture: true });

const container2 = document.querySelector(".container2");
const btn = document.querySelector(".btn");
// const heading = document.querySelector(".heading");

function sayHello() {
  console.log("hello");
}

// heading.addEventListener("click", sayHello);

btn.addEventListener("click", function () {
  const element = document.createElement("h1");
  element.classList.add("heading");
  element.textContent = `I am sitting inside container`;
  container2.appendChild(element);
});

container2.addEventListener("click", function (e) {
  if (e.target.classList.contains("heading")) {
    console.log("there is container");
  }
});
