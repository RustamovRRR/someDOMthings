// getAttribute()
// setAttribute()

// selecting with querySelector
const first = document.querySelector("#special");
// using getAttribute() method
const idValue = first.getAttribute("id");
console.log(idValue);

// selecting with querySelector
const link = document.querySelector("#link");
const hrefLink = link.getAttribute("href");
console.log(hrefLink);

// selecting element not using querySelector. using nextElementSibling property
const secondListItem = first.nextElementSibling.nextElementSibling;
console.log(secondListItem.textContent);
// using setAttribute() method
secondListItem.setAttribute("class", "first");
console.log(secondListItem);
// using textContent property
secondListItem.textContent = "I also have first class";

// selecting all first classes
const links = document.querySelectorAll(".first");
console.log(links);
