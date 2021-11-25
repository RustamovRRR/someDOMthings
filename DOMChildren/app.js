// childNodes - returns all childNodes including whitespace which is treated as a text node

// children - useful one
// firstChild - whitespaces is treated as a text node
// lastChild - whitespaces is treated as a text node

// not recommended one. Be careful
const result = document.querySelector("#result");
const allChildren = result.childNodes;
// console.log(allChildren);

// recommended one
const children = result.children;
console.log(children);
children[0].style.color = "red";

// firstChild and lastchild not recommended
const firstChild = result.firstChild;
console.log(firstChild);
const lastchild = result.lastChild;
console.log(lastchild);
