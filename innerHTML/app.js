// innerHTML
// textContent

// with innerHTML you can insert HTML structure

// select elements
const list = document.getElementById("first");
const divElement = document.getElementById("second");
const listItem = document.querySelector(".item");

// innerHTML vs textConten
console.log(list.textContent);
console.log(list.innerHTML);

console.log(divElement.textContent);
console.log(divElement.innerHTML);

console.log(listItem.textContent);
console.log(listItem.innerHTML);

const randomNumber = Math.floor(Math.random() * 10 + 1);

const ul = document.createElement("ul");
ul.innerHTML = `<li class="item">olivia dunham</li>
      <li>${randomNumber}</li> <li>list item</li>`;
document.body.appendChild(ul);
