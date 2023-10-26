const DOMSelectors = {
    form: document.getElementById("form"),
    input: document.querySelectorAll("input"),
    liquid: document.getElementById("liquid"),
    color: document.getElementById("color"),
    link: document.getElementById("link"),
    button: document.getElementById("btn"),
    cards: document.querySelector("gallery"),
}


function add() {
    DOMSelectors.insertAdjacentHTML("beforeend",
    `<div class="cards">
    <h2>${DOMSelectors.liquid.value}</h2>
    <a href=${DOMSelectors.link.value}>click here</a>
    <h3>${DOMSelectors.color.value}</h3>

    <button class = "Remove">Remove</button>
  </div>`);
    
} 

function clear() {
    const clear = document.cards.querySelectorAll(".clear");
    clear.forEach((clicked) => {
        clicked.addEventListener("click", function(clicked) {
        clicked.target.parentElement.clear(); 
        });
    });
}


function clearInput() {
    DOMSelectors.liquid.value === "";
    DOMSelectors.link.value === "";
    DOMSelectors.color.value === "";
}

DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    add();
    clear();
    clearInput();
}
)

document.body.style.backgroundColor = "purple";

/* document.getElementById("button").addEventListener("click"); */