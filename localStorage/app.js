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
