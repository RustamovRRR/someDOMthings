// Web Storage API - provied by Browser
// session storage, local storage,
// setItem, getItem, removeItem, clear

// localStorage.setItem('name', 'john')
// sessionStorage.setItem('name', "john")

localStorage.setItem("name", "john");
sessionStorage.setItem("name", "john");

// overwriting localStorage
localStorage.setItem("name", "Anna");

// adding more key items localStorage
localStorage.setItem("lastName", "Holmes");
localStorage.setItem("job", "wizard");
localStorage.setItem("nationality", "english");

// getting item from local storage
const job = localStorage.getItem("job");
document.body.textContent = job;

// removing item from localStorage
localStorage.removeItem("name");

// JSON.stringify(), JSON.parse()

const friend = ["eva", "scarlett", "amanda"];

localStorage.setItem("friends", JSON.stringify(friend));

const values = JSON.parse(localStorage.getItem("friends"));
console.log(values[1]);

let fruits;

if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}
//console.log(fruits);
// fruits.push("apple");
fruits.push("cherry");
localStorage.setItem("fruits", JSON.stringify(fruits));
