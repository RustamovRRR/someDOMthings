// submit event listner
// prevent default
// how to get a value

// selecting elements
const form = document.getElementById("form");
const name = document.getElementById("name");
const password = document.getElementById("password");

// adding addEventListener method with submit parameter
form.addEventListener("submit", function (e) {
  // prevent defult
  e.preventDefault();

  console.log("form submitted");

  console.log(name.value);
  console.log(password.value);
});
