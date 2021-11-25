// querySelector('any CSS') -selects single
// querySelectorAll('any CSS') -selects all

// it will only selects first one
const listItem1 = document.querySelector(".listItem");
listItem1.style.color = "red";
console.log(listItem1);

// for selecting last one
const listItemLast = document.querySelector("li:last-child");
listItemLast.style.color = "blue";

// selecting all items
const listItems = document.querySelectorAll(".listItem");
console.log(listItems);

// you can use array methods with querySelectorAll
listItems.forEach(function (item) {
  item.style.backgroundColor = "green";
});
