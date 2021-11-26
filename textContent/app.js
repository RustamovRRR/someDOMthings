// nodeValue
// textContent

const item = document.getElementById("special");
// if you use nodeValue you have to take exta steps like childNodes[0] or firstchild
const nodeValue = item.nodeValue;
console.log(nodeValue);
// you will get null value
// first use childNodes[0]
console.log(item.childNodes[0].nodeValue);
// using firstChild propery
console.log(item.firstChild.nodeValue);

// more easy and simple way is textContent
// in this way you won't use more steps
const easyValue = item.textContent;
console.log(easyValue);
