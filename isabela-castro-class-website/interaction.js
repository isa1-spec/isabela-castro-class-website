// Original message button.
// Only activate it if these elements exist on this page.
const button = document.querySelector("#button");
const message = document.querySelector("#message");

if (button && message) {
  button.addEventListener("click", function () {
    message.textContent = "You clicked the button!";
  });
}

// Give Benito a treat.
const treatButton = document.getElementById("treat-button");
const treatMessage = document.getElementById("treat-message");

let treatCount = 0;

if (treatButton && treatMessage) {
  treatButton.addEventListener("click", function () {
    treatCount += 1;

    const treatWord = treatCount === 1 ? "treat" : "treats";

    treatMessage.textContent =
      `Benito has received ${treatCount} ${treatWord}! 🐾`;
  });
}

// Show or hide Benito's fun fact.
const factButton = document.getElementById("fact-button");
const benitoFact = document.getElementById("benito-fact");

if (factButton && benitoFact) {
  factButton.addEventListener("click", function () {
    benitoFact.hidden = !benitoFact.hidden;

    factButton.textContent = benitoFact.hidden
      ? "lift rug"
      : "fold rug";

    factButton.setAttribute(
      "aria-expanded",
      String(!benitoFact.hidden)
    );
  });
}
