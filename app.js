const DOMSelectors = {
    form: document.getElementById("form"),
    input: document.querySelectorAll("input"),
    liquid: document.getElementById("liquid"),
    color: document.getElementById("color"),
    link: document.getElementById("image"),
    button: document.getElementById("btn"),
    cards: document.querySelector("gallery"),
}


function add() {
    let insert = document.querySelector(".gallery");
    insert.insertAdjacentHTML("beforeend",
    `<div class="cards">
        <h3>${DOMSelectors.liquid.value}</h3>
        <h3>${DOMSelectors.color.value}</h3>
        <div id="img">
            <img src= "${DOMSelectors.link.value}" alt="">
        </div>
        <button class="clear">Remove</button>
    </div>`);
}

function clear() {
    document.querySelectorAll(".clear").forEach((clicked) => {
        clicked.addEventListener("click", function(clicked) {
        clicked.target.parentElement.remove();
        })
    });
} 


function clearInput() {
    DOMSelectors.liquid.value = "";
    DOMSelectors.link.value = "";
    DOMSelectors.color.value = "";
}

DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    add();
    clear();
    clearInput();
});
