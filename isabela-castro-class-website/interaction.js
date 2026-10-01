const button = document.querySelector("#button");
const message = document.querySelector("#message");

function changeMessage() {
    message.textContent = "You clicked the button!";
}

button.addEventListener("click", changeMessage);

Change text
message.textContent = "New text!";

Change a color
element.style.backgroundColor = "pink";

Change an image
image.src = "images/new-image.jpg";

Hide something
element.style.display = "none";

Show something
element.style.display = "block";

Add/remove a CSS class
element.classList.toggle("active");
