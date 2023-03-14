// import number from "./displayComida.js";

const BODY = document.querySelector("body");
const HEADER = document.querySelector('#header');
const CONTAINER = document.querySelector("#container");
const NAV = document.querySelector("#nav");
const CONTENT = document.querySelector("#content");
const DIV_STATS = document.querySelector("#divStats");
const DIV_COMIDA = document.querySelector("#divComida");
const RES = document.querySelector("#res");
const SUGEST = document.querySelector("#sugest");

const LEFT_ICON = document.querySelector("#leftIcon");
const RIGHT_ICON = document.querySelector("#rightIcon");

LEFT_ICON.addEventListener("click", () => {
    // (displayComida === 'none') ? setDisplayComida('flex') : setDisplayComida('none');
    // LEFT_ICON.style.displa = "blue";
    console.log(getComputedStyle(HEADER).display);
});

RIGHT_ICON.addEventListener("click", () => {
    // (displayRes === 'none') ? setDisplayRes('flex') : setDisplayRes('none');
});

NAV.innerHTML = () => {
    return "aa";
}