// prepend
// innerText

const heading = document.createElement("h2");

// adding text by using innerText
heading.innerText = `Massive Dynamic`;

// using prepend method for adding element at the beggining
document.body.prepend(heading);

heading.style.fontSize = "5rem";
heading.style.background = "green";
heading.style.color = "white";
heading.style.padding = "0.5rem 1rem";
heading.style.width = "25rem";
heading.style.margin = "0 auto";
heading.style.marginTop = "6rem";
