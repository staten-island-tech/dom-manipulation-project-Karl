const DOMSelectors = {
    form: document.getElementById("form"),
    input: document.querySelectorAll("input"),
    liquid: document.getElementById("liquid"),
    color: document.getElementById("color"),
    link: document.getElementById("link"),
    button: document.getElementById("btn"),
    cards: document.querySelector(""),
}


function add() {
    DOMSelectors.cards.insertAdjacentHTML("beforeend",
    `<div class="cards">
    <h2>${DOMSelectors.liquid.value}</h2>
    <a href=${DOMSelectors.link}>click here</a>
    <h3>${DOMSelectors.color.value}</h3>

    <button class="clear">Remove</button>
  </div>`);
    
} 

function clear() {
    const clear = document.querySelectorAll(".clear");
    clear.forEach((clicked) => {
        clicked.addEventListener("click", function(clicked) {
        clicked.target.parentElement.clear(); 
        });
    });
}


function clearInput() {
    
}

document.getElementById("button").addEventListener("click");
document.body.style.backgroundColor = "purple";

DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    add();
    clear();
    clearInput();
}
)