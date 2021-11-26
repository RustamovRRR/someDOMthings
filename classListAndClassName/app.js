// classList
// className

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

// using className
const firstClassName = first.className;
console.log(firstClassName);

// you can update classes with classname
second.className = "colors";
// but if you want to add text class it will overwrite
second.className = "text";
// there is a way for adding both of them by seperating them by space
second.className = "text colors";

// using classList
let thirdClassList = third.classList;
console.log(thirdClassList);

// adding classes with classList
third.classList.add("text");
console.log(thirdClassList);

// if you want to add more classes you should seprate them with a comma
third.classList.add("text", "colors");

// this is best way because it won't overwrite classlist
// you can also remove classes by using remove method
third.classList.remove("text");

// there is also contains method which is useful one for conditional statements
let classContain = third.classList.contains("colors");
console.log(classContain);
// it will have bool value

// simple test for contains method
if (third.classList.contains("colors")) {
  third.textContent += `. I also have ${third.classList} classes`;
}
